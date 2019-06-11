package com.main.util;

/**
 * @author 苏学坤
 * @date 2019/01/13
 * @describe 静态资源工具汇总
 */
public class ConstUtil {
    //用户登录
    public static final String ACTION_LOGIN = "ACTION_LOGIN";

    //获取全部员工
    public static final String ACTION_ADMIN_GET_USER = "ACTION_ADMIN_GET_USER";
    //添加新员工
    public static final String ACTION_ADMIN_ADD_USER = "ACTION_ADMIN_ADD_USER";
    //编辑员工资料
    public static final String ACTION_ADMIN_EDIT_USER = "ACTION_ADMIN_EDIT_USER";
    //删除员工
    public static final String ACTION_ADMIN_DEL_USER = "ACTION_ADMIN_DEL_USER";
    //员工权限分配为管理员
    public static final String ACTION_ADMIN_POWER_USER = "ACTION_ADMIN_POWER_USER";
    //获取全部管理员
    public static final String ACTION_ADMIN_GET_ADMIN = "ACTION_ADMIN_GET_ADMIN";
    //添加新管理员
    public static final String ACTION_ADMIN_ADD_ADMIN = "ACTION_ADMIN_ADD_ADMIN";
    //编辑管理员资料
    public static final String ACTION_ADMIN_EDIT_ADMIN = "ACTION_ADMIN_EDIT_ADMIN";
    //删除管理员
    public static final String ACTION_ADMIN_DEL_ADMIN = "ACTION_ADMIN_DEL_ADMIN";
    //管理员权限分配为员工
    public static final String ACTION_ADMIN_POWER_ADMIN = "ACTION_ADMIN_POWER_ADMIN";
    //管理员获取日志
    public static final String ACTION_ADMIN_GET_LOG = "ACTION_ADMIN_GET_LOG";
    //过审
    public static final String ACTION_ADMIN_OK_LOG = "ACTION_ADMIN_OK_LOG";
    //退回
    public static final String ACTION_ADMIN_BACK_LOG = "ACTION_ADMIN_BACK_LOG";

    //获取我的日志
    public static final String ACTION_USER_GET_LOG = "ACTION_USER_GET_LOG";
    //写日志
    public static final String ACTION_USER_ADD_LOG = "ACTION_USER_ADD_LOG";
    //编辑日志
    public static final String ACTION_USER_EDIT_LOG = "ACTION_USER_EDIT_LOG";
    //获取我的资料
    public static final String ACTION_USER_GET_INFO = "ACTION_USER_GET_INFO";
    //修改资料
    public static final String ACTION_USER_EDIT_INFO = "ACTION_USER_EDIT_INFO";
    //修改密码
    public static final String ACTION_USER_EDIT_PWD = "ACTION_USER_EDIT_PWD";
}
