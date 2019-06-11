package com.main.controller;

import com.main.util.Base64Util;
import com.main.util.SessionUtil;
import net.sf.json.JSONObject;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import static com.main.util.ConstUtil.ACTION_LOGIN;

/**
 * @Author: 苏学坤
 * @Date: Create in 2:02 2019/4/18
 * @Description: 登录操作
 */
@Controller
@RequestMapping("/login")
public class Login {
    /**
     * 获取登录页
     * @return
     */
    @RequestMapping("/view")
    public String login() {
        return "/view/login";
    }

    /**
     * 处理浏览器POST请求
     * @param req
     * @param res
     */
    @RequestMapping(value="/action",method= RequestMethod.POST)
    public void action(HttpServletRequest req, HttpServletResponse res) throws IOException {
        //调整编码，防止中文乱码
        req.setCharacterEncoding("utf-8");
        res.setCharacterEncoding("utf-8");
        //获取动作
        String action = req.getParameter("action");
        //获取回写对象
        PrintWriter printWriter = res.getWriter();
        //动作分发
        switch (action) {
            case ACTION_LOGIN:
                printWriter.print(doLogin(req));
                break;
        }
    }

    /**
     * 用户登录
     * @param req
     * @return
     */
    private String doLogin(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        List list = null;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("FROM UserBean WHERE account=:account AND pwd=:pwd");
            query.setParameter("account",req.getParameter("account"));
            query.setParameter("pwd",Base64Util.encode(req.getParameter("pwd")));
            list = query.list();
            transaction.commit();
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (list != null) {
            JSONObject jsonObject = JSONObject.fromObject(list.get(0));
            return jsonObject.toString();
        } else {
            return "";
        }
    }
}
