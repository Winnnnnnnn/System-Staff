<%--
  Created by IntelliJ IDEA.
  User: 苏学坤
  Date: 2019/4/18
  Time: 13:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>员工管理系统</title>
    <link rel="stylesheet" href="../css/libs/bootstrap.css">
    <link rel="stylesheet" href="../css/libs/bootstrap-table.css">
    <link rel="stylesheet" href="../css/best-editor.css">
    <link rel="stylesheet" href="../css/libs/bootstrap-datetimepicker.css">
    <link rel="stylesheet" href="../css/base.css">
</head>
<body>
<%--管理员页面--%>
<div id="home_admin" class="HomeBody">
    <%--顶部导航栏--%>
    <div class="BaseNav">
        <ul>
            <li>
                <img class="BaseNavLogo" src="../image/logo_over.png">
            </li>
            <li id="home_admin_nav_log">
                <a href="#">
                    <img src="../image/icon/新闻动态.png">
                    日志管理
                </a>
            </li>
            <li id="home_admin_nav_user">
                <a href="#">
                    <img src="../image/icon/工牌.png">
                    员工管理
                </a>
            </li>
            <li id="home_admin_nav_admin">
                <a href="#">
                    <img src="../image/icon/IT权限.png">
                    管理员管理
                </a>
            </li>
            <li class="fr">
                <a href="/login/view"><span class="glyphicon glyphicon-log-out"></span> &nbsp;退出登录</a>
            </li>
        </ul>
    </div>
    <%--主区域--%>
    <div class="BaseMain">
        <%--日志管理--%>
        <div id="home_admin_main_log" class="BaseMainBody">
            <%--分类导航--%>
            <div class="BaseSortNav">
                <ul>
                    <li id="home_admin_main_log_nav_week">
                        周报
                    </li>
                    <li id="home_admin_main_log_nav_month">
                        月报
                    </li>
                    <li id="home_admin_main_log_nav_season">
                        季报
                    </li>
                    <li id="home_admin_main_log_nav_year">
                        年报
                    </li>
                </ul>
                <ul>
                    <li id="home_admin_main_log_nav_check">
                        待审
                    </li>
                    <li id="home_admin_main_log_nav_rework">
                        退回
                    </li>
                    <li id="home_admin_main_log_nav_ok">
                        完成
                    </li>
                </ul>
                <%--用来存放当前是操作哪个类型的日志--%>
                <input type="hidden" id="home_admin_main_log_type">
                <%--用来存放当前是操作哪个状态的日志--%>
                <input type="hidden" id="home_admin_main_log_state">
            </div>
            <div class="cf"></div>
            <%--日志列表--%>
            <table id="home_admin_main_log_table" class="table"></table>
        </div>
        <%--员工管理--%>
        <div id="home_admin_main_user" class="BaseMainBody">
            <%--员工管理工具栏--%>
            <div id='home_admin_main_user_toolbar' class='btn-group'>
                <button class="btn btn-default" data-toggle="modal" data-target="#home_admin_main_user_dialog" onclick='addUser()'>
                    <span class='glyphicon glyphicon-plus'></span>&nbsp;添加新员工
                </button>
            </div>
            <%--员工管理信息表--%>
            <table id="home_admin_main_user_table" class="table"></table>
        </div>
        <%--管理员管理--%>
        <div id="home_admin_main_admin" class="BaseMainBody">
            <%--管理员管理工具栏--%>
            <div id='home_admin_main_admin_toolbar' class='btn-group'>
                <button class="btn btn-default" data-toggle="modal" data-target="#home_admin_main_admin_dialog" onclick='addAdmin()'>
                    <span class='glyphicon glyphicon-plus'></span>&nbsp;添加新管理员
                </button>
            </div>
            <%--管理员管理信息表--%>
            <table id="home_admin_main_admin_table" class="table"></table>
            <%--无权限--%>
            <div id="home_admin_main_admin_no_power" class="NoPower">非常抱歉!您没有权限访问该页面！</div>
        </div>
    </div>
    <%--底部--%>
    <div class="BaseBottom">Copyright 2019 员工管理系统 All Rights Reserved</div>
    <%--员工管理对话框--%>
    <div id='home_admin_main_user_dialog' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='home_admin_main_user_dialog_label' aria-hidden='true' style="z-index: 9999;" data-backdrop="static" data-keyboard="false">
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
                    <h4 id='home_admin_main_user_dialog_label' class='modal-title'></h4>
                </div>
                <div class='modal-body'>
                    <input type='hidden' id='home_admin_main_user_dialog_id'/>
                    <div class='form-horizontal' id='home_admin_main_user_dialog_body'>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">手机</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_account" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">密码</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_pwd" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">姓名</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_name" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-10">
                                <label class="radio-inline">
                                    <input type="radio" name="sex" id="home_admin_main_user_dialog_sex_man" value="男">男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="sex" id="home_admin_main_user_dialog_sex_woman" value="女">女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">生日</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_birthday" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">年龄</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_age" class="form-control" disabled/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">身份证</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_idcard" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">联系地址</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_user_dialog_addr" type="text" class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div id='home_admin_main_user_dialog_warn'>
                        <h4>确认要删除吗？不可恢复哦？</h4>
                    </div>
                </div>
                <div class='modal-footer'>
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button id="home_admin_main_user_dialog_btn_add" type="button" class="btn btn-info">创建</button>
                    <button id="home_admin_main_user_dialog_btn_edit" type="button" class="btn btn-info">编辑</button>
                    <button id="home_admin_main_user_dialog_btn_power" type="button" class="btn btn-info">分配为管理员</button>
                    <button id="home_admin_main_user_dialog_btn_del" type="button" class="btn btn-danger">删除</button>
                </div>
            </div>
        </div>
    </div>
    <%--管理员管理对话框--%>
    <div id='home_admin_main_admin_dialog' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='home_admin_main_admin_dialog_label' aria-hidden='true' style="z-index: 9999;" data-backdrop="static" data-keyboard="false">
        <div class='modal-dialog'>
            <div class='modal-content'>
                <div class='modal-header'>
                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
                    <h4 id='home_admin_main_admin_dialog_label' class='modal-title'></h4>
                </div>
                <div class='modal-body'>
                    <input type='hidden' id='home_admin_main_admin_dialog_id'/>
                    <div class='form-horizontal' id='home_admin_main_admin_dialog_body'>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">手机</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_account" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">密码</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_pwd" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">姓名</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_name" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">性别</label>
                            <div class="col-sm-10">
                                <label class="radio-inline">
                                    <input type="radio" name="sex" id="home_admin_main_admin_dialog_sex_man" value="男">男
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" name="sex" id="home_admin_main_admin_dialog_sex_woman" value="女">女
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">生日</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_birthday" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">年龄</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_age" class="form-control" disabled/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">身份证</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_idcard" type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label">联系地址</label>
                            <div class="col-sm-10">
                                <input id="home_admin_main_admin_dialog_addr" type="text" class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div id='home_admin_main_admin_dialog_warn'>
                        <h4>确认要删除吗？不可恢复哦？</h4>
                    </div>
                </div>
                <div class='modal-footer'>
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button id="home_admin_main_admin_dialog_btn_add" type="button" class="btn btn-info">创建</button>
                    <button id="home_admin_main_admin_dialog_btn_edit" type="button" class="btn btn-info">编辑</button>
                    <button id="home_admin_main_admin_dialog_btn_power" type="button" class="btn btn-info">分配为员工</button>
                    <button id="home_admin_main_admin_dialog_btn_del" type="button" class="btn btn-danger">删除</button>
                </div>
            </div>
        </div>
    </div>
</div>
<%--员工页面--%>
<div id="home_user" class="HomeBody">
    <%--顶部导航栏--%>
    <div class="BaseNav">
        <ul>
            <li>
                <img class="BaseNavLogo" src="../image/logo_over.png">
            </li>
            <li id="home_user_nav_log">
                <a href="#">
                    <img src="../image/icon/待办事项.png">
                    写日志
                </a>
            </li>
            <li id="home_user_nav_my">
                <a href="#">
                    <img src="../image/icon/会议记录.png">
                    我的日志
                </a>
            </li>
            <li id="home_user_nav_info">
                <a href="#">
                    <img src="../image/icon/工牌.png">
                    个人资料
                </a>
            </li>
            <li class="fr">
                <a href="/login/view"><span class="glyphicon glyphicon-log-out"></span> &nbsp;退出登录</a>
            </li>
        </ul>
    </div>
    <%--主区域--%>
    <div class="BaseMain">
        <%--写日志--%>
        <div id="home_user_main_log" class="BaseMainBody">
            <%--分类导航--%>
            <div class="BaseSortNav">
                <ul>
                    <li id="home_user_main_log_nav_week">
                        周报
                    </li>
                    <li id="home_user_main_log_nav_month">
                        月报
                    </li>
                    <li id="home_user_main_log_nav_season">
                        季报
                    </li>
                    <li id="home_user_main_log_nav_year">
                        年报
                    </li>
                </ul>
                <%--用来存放当前是操作哪个类型的日志--%>
                <input type="hidden" id="home_user_main_log_type">
                <button id="home_user_main_log_ok">
                    <span class="glyphicon glyphicon-ok"></span>&nbsp;提交
                </button>
            </div>
            <div class="cf"></div>
            <%--日志编辑框--%>
            <div class="BaseLog">
                <div class="BaseLogEdit" id="home_user_main_log_nav_edit"></div>
            </div>
        </div>
        <%--我的日志--%>
        <div id="home_user_main_my" class="BaseMainBody">
            <%--分类导航--%>
            <div class="BaseSortNav">
                <ul>
                    <li id="home_user_main_my_nav_week">
                        周报
                    </li>
                    <li id="home_user_main_my_nav_month">
                        月报
                    </li>
                    <li id="home_user_main_my_nav_season">
                        季报
                    </li>
                    <li id="home_user_main_my_nav_year">
                        年报
                    </li>
                </ul>
                <ul>
                    <li id="home_user_main_my_nav_check">
                        待审
                    </li>
                    <li id="home_user_main_my_nav_rework">
                        退回
                    </li>
                    <li id="home_user_main_my_nav_ok">
                        完成
                    </li>
                </ul>
                <%--用来存放当前是操作哪个类型的日志--%>
                <input type="hidden" id="home_user_main_my_type">
                <%--用来存放当前是操作哪个状态的日志--%>
                <input type="hidden" id="home_user_main_my_state">
            </div>
            <div class="cf"></div>
            <%--日志列表--%>
            <table id="home_user_main_my_table" class="table"></table>
        </div>
        <%--修改日志--%>
        <div id="home_user_main_my_edit" class="BaseMainBody">
            <div class="BaseSortNav">
                <button id="home_user_main_my_edit_back" style="margin-right: 20px;">
                    <span class="glyphicon glyphicon-chevron-left"></span>&nbsp;返回
                </button>
                <button id="home_user_main_my_edit_ok">
                    <span class="glyphicon glyphicon-ok"></span>&nbsp;提交
                </button>
                <input type="hidden" id="home_user_main_my_edit_id">
                <div class="cf"></div>
            </div>
            <div class="cf"></div>
            <div id='home_user_main_my_edit_txt' style="height: 100%;padding: 10px 20px;color: #000;"></div>
        </div>
        <%--个人资料--%>
        <div id="home_user_main_info" class="BaseMainBody">
            <div class="BaseSortNav">
                <ul>
                    <li id="home_user_main_info_nav_check">
                        修改资料
                    </li>
                    <li id="home_user_main_info_nav_pwd">
                        修改密码
                    </li>
                </ul>
                <button id="home_user_main_info_check_ok" style="display: none;">
                    <span class="glyphicon glyphicon-ok"></span>&nbsp;保存
                </button>
                <button id="home_user_main_info_pwd_ok" style="display: none;">
                    <span class="glyphicon glyphicon-ok"></span>&nbsp;保存
                </button>
            </div>
            <div class="cf"></div>
            <div id="home_user_main_info_check" style="display: none;padding:50px;width: 100%;">
                <div class='form-horizontal'>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">手机</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_account" type="text" class="form-control" disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">姓名</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_name" type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">性别</label>
                        <div class="col-sm-8">
                            <label class="radio-inline">
                                <input type="radio" name="sex" id="home_user_main_info_check_sex_man" value="男">男
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="sex" id="home_user_main_info_check_sex_woman" value="女">女
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">生日</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_birthday" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">年龄</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_age" class="form-control" disabled/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">身份证</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_idcard" disabled type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">联系地址</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_check_addr" type="text" class="form-control"/>
                        </div>
                    </div>
                    <input id="home_user_main_info_check_pwd" type="hidden"/>
                </div>
            </div>
            <div id="home_user_main_info_pwd" style="display: none;padding:50px;width: 100%;">
                <div class='form-horizontal'>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">旧密码</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_pwd_old" type="password" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">新密码</label>
                        <div class="col-sm-8">
                            <input id="home_user_main_info_pwd_new" type="password" class="form-control"/>
                        </div>
                    </div>
                    <input id="home_user_main_info_pwd_now" type="hidden"/>
                </div>
            </div>
        </div>
    </div>
    <%--底部--%>
    <div class="BaseBottom">Copyright 2019 员工管理系统 All Rights Reserved</div>
</div>
<%--查看日志对话框--%>
<div id='home_admin_main_log_dialog' class='modal fade' tabindex='-1' role='dialog' aria-labelledby='home_admin_main_log_dialog_label' aria-hidden='true' style="z-index: 9999;" data-backdrop="static" data-keyboard="false">
    <div class='modal-dialog'>
        <div class='modal-content'>
            <div class='modal-header'>
                <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
                <h4 id='home_admin_main_log_dialog_label' class='modal-title'>日志详情</h4>
            </div>
            <div class='modal-body'>
                <div class='form-horizontal' id='home_admin_main_log_dialog_body'></div>
            </div>
            <div class='modal-footer'>
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            </div>
        </div>
    </div>
</div>
<script src="../js/libs/jquery-3.3.1.js"></script>
<script src="../js/libs/bootstrap.js"></script>
<script src="../js/libs/bootstrap-table.js"></script>
<script src="../js/libs/locale/bootstrap-table-zh-CN.js"></script>
<script src="../js/libs/bootstrap-datetimepicker.js"></script>
<script src="../js/libs/locale/bootstrap-datetimepicker.zh-CN.js"></script>
<script src="../js/libs/best-editor.js"></script>
<script src="../js/libs/bideo.js"></script>
<script src="../js/utils/table.js"></script>
<script src="../js/utils/base64.js"></script>
<script src="../js/home.js"></script>
</body>
</html>
