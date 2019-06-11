package com.main.controller;

import com.main.bean.JournalBean;
import com.main.bean.LogListBean;
import com.main.bean.UserBean;
import com.main.util.Base64Util;
import com.main.util.SessionUtil;
import com.main.util.SqlHelper;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.hibernate.HibernateException;
import org.hibernate.Session;
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

import static com.main.util.ConstUtil.*;

/**
 * @Author: 苏学坤
 * @Date: Create in 13:47 2019/4/18
 * @Description: 首页后台路由
 */
@Controller
@RequestMapping("/home")
public class Home {
    /**
     * 获取首页
     * @return
     */
    @RequestMapping("/view")
    public String login() {
        return "/view/home";
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
            case ACTION_ADMIN_GET_LOG:
                printWriter.print(doGetLog(req));
                break;
            case ACTION_ADMIN_OK_LOG:
                printWriter.print(doOkLog(req));
                break;
            case ACTION_ADMIN_BACK_LOG:
                printWriter.print(doBackLog(req));
                break;
            case ACTION_ADMIN_GET_USER:
                printWriter.print(doGetUser(req));
                break;
            case ACTION_ADMIN_ADD_USER:
                printWriter.print(doAddUser(req));
                break;
            case ACTION_ADMIN_EDIT_USER:
                printWriter.print(doEditUser(req));
                break;
            case ACTION_ADMIN_DEL_USER:
                printWriter.print(doDelUser(req));
                break;
            case ACTION_ADMIN_POWER_USER:
                printWriter.print(doPowerUser(req));
                break;
            case ACTION_ADMIN_GET_ADMIN:
                printWriter.print(doGetAdmin(req));
                break;
            case ACTION_ADMIN_ADD_ADMIN:
                printWriter.print(doAddAdmin(req));
                break;
            case ACTION_ADMIN_EDIT_ADMIN:
                printWriter.print(doEditAdmin(req));
                break;
            case ACTION_ADMIN_DEL_ADMIN:
                printWriter.print(doDelAdmin(req));
                break;
            case ACTION_ADMIN_POWER_ADMIN:
                printWriter.print(doPowerAdmin(req));
                break;
            case ACTION_USER_GET_LOG:
                printWriter.print(doGetMyLog(req));
                break;
            case ACTION_USER_ADD_LOG:
                printWriter.print(doAddLog(req));
                break;
            case ACTION_USER_EDIT_LOG:
                printWriter.print(doEditLog(req));
                break;
            case ACTION_USER_GET_INFO:
                printWriter.print(doGetMyInfo(req));
                break;
            case ACTION_USER_EDIT_INFO:
                printWriter.print(doEditMyInfo(req));
                break;
            case ACTION_USER_EDIT_PWD:
                printWriter.print(doEditMyPwd(req));
                break;
        }
    }

    /**
     * 根据条件获取日志
     * @param req
     * @return
     */
    private String doGetLog(HttpServletRequest req) {
        String sql = "select journal.*,user.name,user.account " +
                "from journal,user " +
                "where journal.type=? " +
                "and journal.state=? " +
                "and journal.user=user.id " +
                "order by journal.id desc";
        String[] p = {
                req.getParameter("type"),
                req.getParameter("state")
        };
        List<LogListBean> logListBeans = SqlHelper.doListQuery(sql,p,LogListBean.class);
        if (null != logListBeans) {
            JSONArray jsonArray = JSONArray.fromObject(logListBeans);
            return jsonArray.toString();
        } else {
            return "";
        }
    }

    /**
     * 日志过审
     * @param req
     * @return
     */
    private Boolean doOkLog(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update JournalBean set state=2 where id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 日志退回
     * @param req
     * @return
     */
    private Boolean doBackLog(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update JournalBean set state=1 where id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取全部员工信息
     * @param req
     * @return
     */
    private String doGetUser(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        List list = null;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("FROM UserBean WHERE power=2 ORDER BY id DESC");
            list = query.list();
            transaction.commit();
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (list != null) {
            JSONArray jsonArray = JSONArray.fromObject(list);
            return jsonArray.toString();
        } else {
            return "";
        }
    }

    /**
     * 添加新员工
     * @param req
     * @return
     */
    private Boolean doAddUser(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                req.getParameter("account"),
                Base64Util.encode(req.getParameter("pwd")),
                req.getParameter("name"),
                2,
                req.getParameter("sex"),
                req.getParameter("birthday"),
                req.getParameter("age"),
                req.getParameter("idcard"),
                req.getParameter("addr")
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.save(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 编辑员工资料
     * @param req
     * @return
     */
    private Boolean doEditUser(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                Integer.parseInt(req.getParameter("id")),
                req.getParameter("account"),
                Base64Util.encode(req.getParameter("pwd")),
                req.getParameter("name"),
                2,
                req.getParameter("sex"),
                req.getParameter("birthday"),
                req.getParameter("age"),
                req.getParameter("idcard"),
                req.getParameter("addr")
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.update(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 删除员工
     * @param req
     * @return
     */
    private Boolean doDelUser(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                Integer.parseInt(req.getParameter("id"))
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.delete(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 分配用戶的权限为管理员
     * @param req
     * @return
     */
    private Boolean doPowerUser(HttpServletRequest req) {
        //实例化对象
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update UserBean set power=1 where id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取全部管理员信息
     * @param req
     * @return
     */
    private String doGetAdmin(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        List list = null;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("FROM UserBean WHERE power=1 ORDER BY id DESC");
            list = query.list();
            transaction.commit();
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (list != null) {
            JSONArray jsonArray = JSONArray.fromObject(list);
            return jsonArray.toString();
        } else {
            return "";
        }
    }

    /**
     * 添加新管理员
     * @param req
     * @return
     */
    private Boolean doAddAdmin(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                req.getParameter("account"),
                Base64Util.encode(req.getParameter("pwd")),
                req.getParameter("name"),
                1,
                req.getParameter("sex"),
                req.getParameter("birthday"),
                req.getParameter("age"),
                req.getParameter("idcard"),
                req.getParameter("addr")
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.save(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 编辑管路员资料
     * @param req
     * @return
     */
    private Boolean doEditAdmin(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                Integer.parseInt(req.getParameter("id")),
                req.getParameter("account"),
                Base64Util.encode(req.getParameter("pwd")),
                req.getParameter("name"),
                1,
                req.getParameter("sex"),
                req.getParameter("birthday"),
                req.getParameter("age"),
                req.getParameter("idcard"),
                req.getParameter("addr")
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.update(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 删除管理员
     * @param req
     * @return
     */
    private Boolean doDelAdmin(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                Integer.parseInt(req.getParameter("id"))
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.delete(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 分配管理员的权限为用户
     * @param req
     * @return
     */
    private Boolean doPowerAdmin(HttpServletRequest req) {
        //实例化对象
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update UserBean set power=2 where id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取我的日志
     * @param req
     * @return
     */
    private String doGetMyLog(HttpServletRequest req) {
        String sql = "select journal.*,user.name,user.account " +
                "from journal,user " +
                "where journal.type=? " +
                "and journal.state=? " +
                "and journal.user=user.id " +
                "and journal.user=? " +
                "order by journal.id desc";
        String[] p = {
                req.getParameter("type"),
                req.getParameter("state"),
                req.getParameter("id")
        };
        List<LogListBean> logListBeans = SqlHelper.doListQuery(sql,p,LogListBean.class);
        if (null != logListBeans) {
            JSONArray jsonArray = JSONArray.fromObject(logListBeans);
            return jsonArray.toString();
        } else {
            return "";
        }
    }

    /**
     * 写日志
     * @param req
     * @return
     */
    private Boolean doAddLog(HttpServletRequest req) {
        //实例化对象
        JournalBean journalBean = new JournalBean(
                req.getParameter("detail"),
                Integer.parseInt(req.getParameter("type")),
                req.getParameter("time"),
                Integer.parseInt(req.getParameter("user"))
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.save(journalBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 编辑日志
     * @param req
     * @return
     */
    private Boolean doEditLog(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update JournalBean set detail=:detail,state=0 where id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.setParameter("detail",req.getParameter("detail"));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 获取个人资料
     * @param req
     * @return
     */
    private String doGetMyInfo(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        List list = null;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("FROM UserBean WHERE id=:id");
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
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

    /**
     * 修改我的个人资料
     * @param req
     * @return
     */
    private Boolean doEditMyInfo(HttpServletRequest req) {
        //实例化对象
        UserBean userBean = new UserBean(
                Integer.parseInt(req.getParameter("id")),
                req.getParameter("account"),
                req.getParameter("pwd"),
                req.getParameter("name"),
                2,
                req.getParameter("sex"),
                req.getParameter("birthday"),
                req.getParameter("age"),
                req.getParameter("idcard"),
                req.getParameter("addr")
        );
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            session.update(userBean);
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 修改我的密码
     */
    private Boolean doEditMyPwd(HttpServletRequest req) {
        final Session session = SessionUtil.getSession();
        Transaction transaction = null;
        Boolean result = false;
        try{
            transaction = session.beginTransaction();
            Query query = session.createQuery("update UserBean set pwd=:pwd where id=:id");
            query.setParameter("pwd",Base64Util.encode(req.getParameter("pwd")));
            query.setParameter("id",Integer.parseInt(req.getParameter("id")));
            query.executeUpdate();
            transaction.commit();
            result = true;
        }catch (HibernateException e) {
            if (transaction!=null) transaction.rollback();
            e.printStackTrace();
        }finally {
            session.close();
        }
        if (result) {
            return true;
        } else {
            return false;
        }
    }
}
