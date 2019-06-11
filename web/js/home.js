//全部员工数据
var admin_data_user = null;
//富文本编辑器
var bestEdtitor = new BestEditor('#home_user_main_log_nav_edit', {
    toolbar: ['bold','italic','underline','strikethrough','link','unorderlist','orderlist','h1','h2','h3','h4','alignLeft','alignCenter','alignRight','undo','redo','full']
});
//富文本编辑器
var bestEdtitor_back = new BestEditor('#home_user_main_my_edit_txt', {
    toolbar: ['bold','italic','underline','strikethrough','link','unorderlist','orderlist','h1','h2','h3','h4','alignLeft','alignCenter','alignRight','undo','redo','full']
});

$(function () {
    initPage();
});

/**
 * 初始化页面
 */
function initPage() {
    //获取权限
    var power = getUrlParam("power");
    switch (power) {
        case '0':
        case '1':
            initAdmin();
            break;
        case '2':
            initUser();
            break;
    }
}

/**
 * 初始化管理员页面
 */
function initAdmin() {
    //显示管理员页面
    $('#home_admin').show();
    //管理员页面菜单初始化
    var menu = getUrlParam("menu");
    if (null==menu||''==menu) {
        $('#home_admin_nav_log').css('background','#57606f');
        initAdminToLog();
    } else {
        switch (menu) {
            case '0':
                $('#home_admin_nav_log').css('background','#57606f');
                initAdminToLog();
                break;
            case '1':
                //员工管理
                $('#home_admin_nav_user').css('background','#57606f');
                initAdminToUser();
                break;
            case '2':
                //管理员管理
                $('#home_admin_nav_admin').css('background','#57606f');
                initAdminToAdmin();
                break;
        }
    }
    //绑定导航栏按钮点击事件
    $('#home_admin_nav_log').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0";
    });
    $('#home_admin_nav_user').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1";
    });
    $('#home_admin_nav_admin').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=2";
    });
}

/**
 * 初始化日志管理
 */
function initAdminToLog() {
    $('#home_admin_main_log').show();
    //判断当前日志类型
    var log = getUrlParam("log");
    if (log == null || '' == log || 'null' == log) {
        $('#home_admin_main_log_nav_week').css('background','#fff');
        $('#home_admin_main_log_nav_week').css('color','#000');
        $('#home_admin_main_log_type').val('0');
    } else {
        switch (log) {
            case '0':
                $('#home_admin_main_log_nav_week').css('background','#fff');
                $('#home_admin_main_log_nav_week').css('color','#000');
                $('#home_admin_main_log_type').val('0');
                break;
            case '1':
                $('#home_admin_main_log_nav_month').css('background','#fff');
                $('#home_admin_main_log_nav_month').css('color','#000');
                $('#home_admin_main_log_type').val('1');
                break;
            case '2':
                $('#home_admin_main_log_nav_season').css('background','#fff');
                $('#home_admin_main_log_nav_season').css('color','#000');
                $('#home_admin_main_log_type').val('2');
                break;
            case '3':
                $('#home_admin_main_log_nav_year').css('background','#fff');
                $('#home_admin_main_log_nav_year').css('color','#000');
                $('#home_admin_main_log_type').val('3');
                break;
        }
    }
    //绑定日志类型的选择
    $('#home_admin_main_log_nav_week').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=0";
    });
    $('#home_admin_main_log_nav_month').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=1";
    });
    $('#home_admin_main_log_nav_season').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=2";
    });
    $('#home_admin_main_log_nav_year').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=3";
    });
    //判断当前类型
    var state = getUrlParam("state");
    if (state == null || '' == state) {
        $('#home_admin_main_log_nav_check').css('background','#fff');
        $('#home_admin_main_log_nav_check').css('color','#000');
        $('#home_admin_main_log_state').val('0');
    } else {
        switch (state) {
            case '0':
                $('#home_admin_main_log_nav_check').css('background','#fff');
                $('#home_admin_main_log_nav_check').css('color','#000');
                $('#home_admin_main_log_state').val('0');
                break;
            case '1':
                $('#home_admin_main_log_nav_rework').css('background','#fff');
                $('#home_admin_main_log_nav_rework').css('color','#000');
                $('#home_admin_main_log_state').val('1');
                break;
            case '2':
                $('#home_admin_main_log_nav_ok').css('background','#fff');
                $('#home_admin_main_log_nav_ok').css('color','#000');
                $('#home_admin_main_log_state').val('2');
                break;
        }
    }
    $('#home_admin_main_log_nav_check').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=" + getUrlParam("log") + "&state=0";
    });
    $('#home_admin_main_log_nav_rework').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=" + getUrlParam("log") + "&state=1";
    });
    $('#home_admin_main_log_nav_ok').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=" + getUrlParam("log") + "&state=2";
    });
    initAdminToLogTable(1);
}

/**
 * 初始化日志管理信息表
 * @param pageNumber
 */
function initAdminToLogTable(pageNumber) {
    //初始化表格
    var table = new TableInit();
    //配置表格参数
    var parm = {
        url:'/home/action',
        data:{action:'ACTION_ADMIN_GET_LOG',type:$('#home_admin_main_log_type').val(),state:$('#home_admin_main_log_state').val()},
        id:'#home_admin_main_log_table',
        toolbar:'',
        pageNumber:pageNumber,
        search:true,
        export:false,
        columns:[{
            field: 'account',
            title: '账号',
            align: 'center'
        }, {
            field: 'name',
            title: '姓名',
            align: 'center'
        }, {
            field: 'detail',
            title: '详情',
            align: 'center',
            formatter: function (value, row, index) {
                return "<a href='#' onclick='openDetail(\"" + value + "\")' data-toggle=\"modal\" data-target=\"#home_admin_main_log_dialog\">查看</a>"
            }
        }, {
            field: 'time',
            title: '发布日期',
            align: 'center'
        }, {
            field: 'id',
            title: '操作',
            align: 'center',
            formatter: function (value, row, index) {
                if (row.state == 0) {
                    return "<div class='btn-group'><button class='btn btn-info' onclick='okLog(\"" + value + "\")'><span class='glyphicon glyphicon-edit'></span>&nbsp;过审</button><button class='btn btn-danger' onclick='backLog(\"" + value + "\")'><span class='glyphicon glyphicon-remove'></span>&nbsp;退回</button></div>";
                } else if(row.state == 1) {
                    return "<div class='btn-group'><button class='btn btn-info' onclick='okLog(\"" + value + "\")'><span class='glyphicon glyphicon-edit'></span>&nbsp;过审</button></div>";
                } else {
                    return "<div class='btn-group'><button class='btn btn-danger' onclick='backLog(\"" + value + "\")'><span class='glyphicon glyphicon-remove'></span>&nbsp;退回</button></div>";
                }
            }
        }]
    };
    //创建表格
    table.Init(parm);
}

/**
 * 查看日志详情
 * @param detail
 */
function openDetail(detail) {
    $('#home_admin_main_log_dialog_body').empty();
    $('#home_admin_main_log_dialog_body').append(detail);
}

/**
 * 过审
 * @param id
 */
function okLog(id) {
    //数据封装
    var data = {
        action:'ACTION_ADMIN_OK_LOG',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('操作成功!');
                initAdminToLogTable($('#home_admin_main_log_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('操作失败!');
            }
        },
        error: function() {
            alert('服务器异常，操作失败!');
        }
    });
}

/**
 * 退回
 * @param id
 */
function backLog(id) {
//数据封装
    var data = {
        action:'ACTION_ADMIN_BACK_LOG',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('操作成功!');
                initAdminToLogTable($('#home_admin_main_log_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('操作失败!');
            }
        },
        error: function() {
            alert('服务器异常，操作失败!');
        }
    });
}

/**
 * 初始化员工管理
 */
function initAdminToUser() {
    $('#home_admin_main_user').show();
    initAdminToUserTable(1);
}

/**
 * 初始化员工管理信息表
 * @param pageNumber
 */
function initAdminToUserTable(pageNumber) {
    //初始化表格
    var table = new TableInit();
    //配置表格参数
    var parm = {
        url:'/home/action',
        data:{action:'ACTION_ADMIN_GET_USER'},
        id:'#home_admin_main_user_table',
        toolbar:'#home_admin_main_user_toolbar',
        pageNumber:pageNumber,
        search:true,
        export:false,
        columns:[{
            field: 'account',
            title: '账号',
            align: 'center'
        }, {
            field: 'name',
            title: '姓名',
            align: 'center'
        }, {
            field: 'sex',
            title: '性别',
            align: 'center'
        }, {
            field: 'birthday',
            title: '生日',
            align: 'center'
        }, {
            field: 'age',
            title: '年龄',
            align: 'center'
        }, {
            field: 'idcard',
            title: '身份证',
            align: 'center'
        }, {
            field: 'addr',
            title: '地址',
            align: 'center'
        }, {
            field: 'id',
            title: '操作',
            align: 'center',
            formatter: function (value, row, index) {
                var user = escape(JSON.stringify(row));
                return "<div class='btn-group'><button class='btn btn-info' data-toggle=\"modal\" data-target=\"#home_admin_main_user_dialog\" onclick='editUser(\"" + user + "\")'><span class='glyphicon glyphicon-edit'></span>&nbsp;编辑</button><button class='btn btn-danger' data-toggle=\"modal\" data-target=\"#home_admin_main_user_dialog\" onclick='delUser(\"" + value + "\")'><span class='glyphicon glyphicon-remove'></span>&nbsp;删除</button></div>";
            }
        }]
    };
    //创建表格
    table.Init(parm);
}

/**
 * 初始化员工管理对话框
 */
function initAdminToUserDialog() {
    $('#home_admin_main_user_dialog_body').hide();
    $('#home_admin_main_user_dialog_warn').hide();
    $('#home_admin_main_user_dialog_btn_add').hide();
    $('#home_admin_main_user_dialog_btn_edit').hide();
    $('#home_admin_main_user_dialog_btn_del').hide();
    $('#home_admin_main_user_dialog_btn_power').hide();
    //绑定出生日期选择组件
    $('#home_admin_main_user_dialog_birthday').datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 2,
        minView: 2,
        initialDate: new Date(),
        forceParse: true,
        bootcssVer:3,
        language: 'zh-CN'
    });
    //实时自动计算年龄
    $('#home_admin_main_user_dialog_birthday').change(function () {
        $('#home_admin_main_user_dialog_age').val(jsGetAge($(this).val()));
    });
    //获取全部员工数据
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data:{action:'ACTION_ADMIN_GET_USER'},
        success: function (res) {
            admin_data_user = res;
        },
        error: function () {
            admin_data_user = null;
        }
    });
    $('#home_admin_main_user_dialog_account').removeAttr("disabled");
    $('#home_admin_main_user_dialog_idcard').removeAttr("disabled");
}

/**
 * 添加新员工
 */
function addUser() {
    initAdminToUserDialog();
    $('#home_admin_main_user_dialog_body').show();
    $('#home_admin_main_user_dialog_btn_add').show();
    $('#home_admin_main_user_dialog_label').html('添加新员工');
    //清除数据
    $('#home_admin_main_user_dialog_account').val('');
    $('#home_admin_main_user_dialog_pwd').val('');
    $('#home_admin_main_user_dialog_name').val('');
    $("#home_admin_main_user_dialog_sex_man").attr("checked","checked");
    $('#home_admin_main_user_dialog_birthday').val('');
    $('#home_admin_main_user_dialog_age').val('');
    $('#home_admin_main_user_dialog_idcard').val('');
    $('#home_admin_main_user_dialog_addr').val('');
}

/**
 * 绑定添加新员工按钮
 */
$('#home_admin_main_user_dialog_btn_add').click(function () {
    //获取数据
    var account = $('#home_admin_main_user_dialog_account').val();
    var pwd = $('#home_admin_main_user_dialog_pwd').val();
    var name = $('#home_admin_main_user_dialog_name').val();
    var sex = $('#home_admin_main_user_dialog_sex_man').is(':checked')?'男':'女';
    var birthday = $('#home_admin_main_user_dialog_birthday').val();
    var age = $('#home_admin_main_user_dialog_age').val();
    var idcard = $('#home_admin_main_user_dialog_idcard').val();
    var addr = $('#home_admin_main_user_dialog_addr').val();
    //数据校验
    if (account == '') {
        alert('请输入手机号!');
        return;
    }
    if (!isPoneAvailable(account)) {
        alert('请输入正确格式的手机号!');
        return;
    }
    //判断是否已经被注册过
    var flag_account = false;
    var flag_idcard = false;
    if (admin_data_user != null) {
        $.each(admin_data_user,function (i,obj) {
            if (obj.account == account) {
                flag_account = true;
            }
            if (obj.idcard == idcard) {
                flag_idcard = true;
            }
        });
    }
    if (flag_account) {
        alert('该手机号已经绑定员工!');
        return;
    }
    if (flag_idcard) {
        alert('该身份证已经绑定员工!');
        return;
    }
    if (pwd == '') {
        alert('请输入密码!');
        return;
    }
    if (birthday == '') {
        alert('请选择生日!');
        return;
    }
    if (idcard == '') {
        alert('请输入身份证!');
        return;
    }
    if (addr == '') {
        alert('请输入联系地址!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_ADMIN_ADD_USER',
        account:account,
        pwd:pwd,
        name:name,
        sex:sex,
        birthday:birthday,
        age:age,
        idcard:idcard,
        addr:addr
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('添加成功!');
                $('#home_admin_main_user_dialog').modal('hide');
                initAdminToUserTable(1);
            } else {
                alert('添加失败!');
            }
        },
        error: function() {
            alert('服务器异常，添加失败!');
        }
    });
});

/**
 * 编辑员工信息
 * @param data
 */
function editUser(data) {
    initAdminToUserDialog();
    $('#home_admin_main_user_dialog_body').show();
    $('#home_admin_main_user_dialog_btn_edit').show();
    $('#home_admin_main_user_dialog_label').html('修改员工资料');
    var user = JSON.parse(unescape(data));
    $('#home_admin_main_user_dialog_account').attr("disabled","disabled");
    $('#home_admin_main_user_dialog_idcard').attr("disabled","disabled");
    //填充员工信息
    $('#home_admin_main_user_dialog_id').val(user.id);
    $('#home_admin_main_user_dialog_account').val(user.account);
    $('#home_admin_main_user_dialog_pwd').val(new Base64().decode(user.pwd));
    $('#home_admin_main_user_dialog_name').val(user.name);
    var sex = user.sex=='男'?true:false;
    if (sex) {
        $("#home_admin_main_user_dialog_sex_man").attr("checked","checked");
    } else {
        $("#home_admin_main_user_dialog_sex_woman").attr("checked","checked");
    }
    $('#home_admin_main_user_dialog_birthday').val(user.birthday);
    $('#home_admin_main_user_dialog_age').val(user.age);
    $('#home_admin_main_user_dialog_idcard').val(user.idcard);
    $('#home_admin_main_user_dialog_addr').val(user.addr);
    //权限判断
    var power = getUrlParam("power");
    if (power == '0') {
        $('#home_admin_main_user_dialog_btn_power').show();
    }
}

/**
 * 绑定修改
 */
$('#home_admin_main_user_dialog_btn_edit').click(function () {
    //获取数据
    var id = $('#home_admin_main_user_dialog_id').val();
    var account = $('#home_admin_main_user_dialog_account').val();
    var pwd = $('#home_admin_main_user_dialog_pwd').val();
    var name = $('#home_admin_main_user_dialog_name').val();
    var sex = $('#home_admin_main_user_dialog_sex_man').is(':checked')?'男':'女';
    var birthday = $('#home_admin_main_user_dialog_birthday').val();
    var age = $('#home_admin_main_user_dialog_age').val();
    var idcard = $('#home_admin_main_user_dialog_idcard').val();
    var addr = $('#home_admin_main_user_dialog_addr').val();
    //数据校验
    if (pwd == '') {
        alert('请输入密码!');
        return;
    }
    if (birthday == '') {
        alert('请选择生日!');
        return;
    }
    if (idcard == '') {
        alert('请输入身份证!');
        return;
    }
    if (addr == '') {
        alert('请输入联系地址!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_ADMIN_EDIT_USER',
        account:account,
        pwd:pwd,
        name:name,
        sex:sex,
        birthday:birthday,
        age:age,
        idcard:idcard,
        addr:addr,
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('修改成功!');
                $('#home_admin_main_user_dialog').modal('hide');
                initAdminToUserTable($('#home_admin_main_user_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('修改失败!');
            }
        },
        error: function() {
            alert('服务器异常，修改失败!');
        }
    });
});

/**
 * 删除员工
 * @param id
 */
function delUser(id) {
    initAdminToUserDialog();
    $('#home_admin_main_user_dialog_warn').show();
    $('#home_admin_main_user_dialog_btn_del').show();
    $('#home_admin_main_user_dialog_label').html('删除员工');
    $('#home_admin_main_user_dialog_id').val(id);
}

/**
 * 绑定删除员工按钮
 */
$('#home_admin_main_user_dialog_btn_del').click(function () {
    //获取数据
    var id = $('#home_admin_main_user_dialog_id').val();
    //数据封装
    var data = {
        action:'ACTION_ADMIN_DEL_USER',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('删除成功!');
                $('#home_admin_main_user_dialog').modal('hide');
                initAdminToUserTable($('#home_admin_main_user_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('删除失败!');
            }
        },
        error: function() {
            alert('服务器异常，删除失败!');
        }
    });
});

/**
 * 绑定分配为管理员按钮
 */
$('#home_admin_main_user_dialog_btn_power').click(function () {
//获取数据
    var id = $('#home_admin_main_user_dialog_id').val();
    //数据封装
    var data = {
        action:'ACTION_ADMIN_POWER_USER',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('权限分配成功!');
                $('#home_admin_main_user_dialog').modal('hide');
                initAdminToUserTable($('#home_admin_main_user_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('权限分配失败!');
            }
        },
        error: function() {
            alert('服务器异常，权限分配失败!');
        }
    });
});

/**
 * 初始化管理员管理
 */
function initAdminToAdmin() {
    $('#home_admin_main_admin').show();
    //权限判断
    var power = getUrlParam("power");
    if (power == '0') {
        $('#home_admin_main_admin_no_power').hide();
        initAdminToAdminTable(1);
    } else {
        $('#home_admin_main_admin_toolbar').hide();
        $('#home_admin_main_admin_table').hide();
    }
}

/**
 * 初始化管理员管理信息表
 * @param pageNumber
 */
function initAdminToAdminTable(pageNumber) {
    //初始化表格
    var table = new TableInit();
    //配置表格参数
    var parm = {
        url:'/home/action',
        data:{action:'ACTION_ADMIN_GET_ADMIN'},
        id:'#home_admin_main_admin_table',
        toolbar:'#home_admin_main_admin_toolbar',
        pageNumber:pageNumber,
        search:true,
        export:false,
        columns:[{
            field: 'account',
            title: '账号',
            align: 'center'
        }, {
            field: 'name',
            title: '姓名',
            align: 'center'
        }, {
            field: 'sex',
            title: '性别',
            align: 'center'
        }, {
            field: 'birthday',
            title: '生日',
            align: 'center'
        }, {
            field: 'age',
            title: '年龄',
            align: 'center'
        }, {
            field: 'idcard',
            title: '身份证',
            align: 'center'
        }, {
            field: 'addr',
            title: '地址',
            align: 'center'
        }, {
            field: 'id',
            title: '操作',
            align: 'center',
            formatter: function (value, row, index) {
                var user = escape(JSON.stringify(row));
                return "<div class='btn-group'><button class='btn btn-info' data-toggle=\"modal\" data-target=\"#home_admin_main_admin_dialog\" onclick='editAdmin(\"" + user + "\")'><span class='glyphicon glyphicon-edit'></span>&nbsp;编辑</button><button class='btn btn-danger' data-toggle=\"modal\" data-target=\"#home_admin_main_admin_dialog\" onclick='delAdmin(\"" + value + "\")'><span class='glyphicon glyphicon-remove'></span>&nbsp;删除</button></div>";
            }
        }]
    };
    //创建表格
    table.Init(parm);
}

/**
 * 初始化管理员管理对话框
 */
function initAdminToAdminDialog() {
    $('#home_admin_main_admin_dialog_body').hide();
    $('#home_admin_main_admin_dialog_warn').hide();
    $('#home_admin_main_admin_dialog_btn_add').hide();
    $('#home_admin_main_admin_dialog_btn_edit').hide();
    $('#home_admin_main_admin_dialog_btn_del').hide();
    $('#home_admin_main_admin_dialog_btn_power').hide();
    //绑定出生日期选择组件
    $('#home_admin_main_admin_dialog_birthday').datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 2,
        minView: 2,
        initialDate: new Date(),
        forceParse: true,
        bootcssVer:3,
        language: 'zh-CN'
    });
    //实时自动计算年龄
    $('#home_admin_main_admin_dialog_birthday').change(function () {
        $('#home_admin_main_admin_dialog_age').val(jsGetAge($(this).val()));
    });
    //获取全部员工数据
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data:{action:'ACTION_ADMIN_GET_ADMIN'},
        success: function (res) {
            admin_data_user = res;
        },
        error: function () {
            admin_data_user = null;
        }
    });
    $('#home_admin_main_admin_dialog_account').removeAttr("disabled");
    $('#home_admin_main_admin_dialog_idcard').removeAttr("disabled");
}

/**
 * 添加新管理员
 */
function addAdmin() {
    initAdminToAdminDialog();
    $('#home_admin_main_admin_dialog_body').show();
    $('#home_admin_main_admin_dialog_btn_add').show();
    $('#home_admin_main_admin_dialog_label').html('添加新管理员');
    //清除数据
    $('#home_admin_main_admin_dialog_account').val('');
    $('#home_admin_main_admin_dialog_pwd').val('');
    $('#home_admin_main_admin_dialog_name').val('');
    $("#home_admin_main_admin_dialog_sex_man").attr("checked","checked");
    $('#home_admin_main_admin_dialog_birthday').val('');
    $('#home_admin_main_admin_dialog_age').val('');
    $('#home_admin_main_admin_dialog_idcard').val('');
    $('#home_admin_main_admin_dialog_addr').val('');
}

/**
 * 绑定添加新管理员按钮
 */
$('#home_admin_main_admin_dialog_btn_add').click(function () {
    //获取数据
    var account = $('#home_admin_main_admin_dialog_account').val();
    var pwd = $('#home_admin_main_admin_dialog_pwd').val();
    var name = $('#home_admin_main_admin_dialog_name').val();
    var sex = $('#home_admin_main_admin_dialog_sex_man').is(':checked')?'男':'女';
    var birthday = $('#home_admin_main_admin_dialog_birthday').val();
    var age = $('#home_admin_main_admin_dialog_age').val();
    var idcard = $('#home_admin_main_admin_dialog_idcard').val();
    var addr = $('#home_admin_main_admin_dialog_addr').val();
    //数据校验
    if (account == '') {
        alert('请输入手机号!');
        return;
    }
    if (!isPoneAvailable(account)) {
        alert('请输入正确格式的手机号!');
        return;
    }
    //判断是否已经被注册过
    var flag_account = false;
    var flag_idcard = false;
    if (admin_data_user != null) {
        $.each(admin_data_user,function (i,obj) {
            if (obj.account == account) {
                flag_account = true;
            }
            if (obj.idcard == idcard) {
                flag_idcard = true;
            }
        });
    }
    if (flag_account) {
        alert('该手机号已经绑定管理员!');
        return;
    }
    if (flag_idcard) {
        alert('该身份证已经绑定管理员!');
        return;
    }
    if (pwd == '') {
        alert('请输入密码!');
        return;
    }
    if (birthday == '') {
        alert('请选择生日!');
        return;
    }
    if (idcard == '') {
        alert('请输入身份证!');
        return;
    }
    if (addr == '') {
        alert('请输入联系地址!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_ADMIN_ADD_ADMIN',
        account:account,
        pwd:pwd,
        name:name,
        sex:sex,
        birthday:birthday,
        age:age,
        idcard:idcard,
        addr:addr
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('添加成功!');
                $('#home_admin_main_admin_dialog').modal('hide');
                initAdminToAdminTable(1);
            } else {
                alert('添加失败!');
            }
        },
        error: function() {
            alert('服务器异常，添加失败!');
        }
    });
});

/**
 * 编辑管理员信息
 * @param data
 */
function editAdmin(data) {
    initAdminToAdminDialog();
    $('#home_admin_main_admin_dialog_body').show();
    $('#home_admin_main_admin_dialog_btn_edit').show();
    $('#home_admin_main_admin_dialog_label').html('修改管理员资料');
    var user = JSON.parse(unescape(data));
    $('#home_admin_main_admin_dialog_account').attr("disabled","disabled");
    $('#home_admin_main_admin_dialog_idcard').attr("disabled","disabled");
    //填充员工信息
    $('#home_admin_main_admin_dialog_id').val(user.id);
    $('#home_admin_main_admin_dialog_account').val(user.account);
    $('#home_admin_main_admin_dialog_pwd').val(new Base64().decode(user.pwd));
    $('#home_admin_main_admin_dialog_name').val(user.name);
    var sex = user.sex=='男'?true:false;
    if (sex) {
        $("#home_admin_main_admin_dialog_sex_man").attr("checked","checked");
    } else {
        $("#home_admin_main_admin_dialog_sex_woman").attr("checked","checked");
    }
    $('#home_admin_main_admin_dialog_birthday').val(user.birthday);
    $('#home_admin_main_admin_dialog_age').val(user.age);
    $('#home_admin_main_admin_dialog_idcard').val(user.idcard);
    $('#home_admin_main_admin_dialog_addr').val(user.addr);
    //权限判断
    var power = getUrlParam("power");
    if (power == '0') {
        $('#home_admin_main_admin_dialog_btn_power').show();
    }
}

/**
 * 绑定修改
 */
$('#home_admin_main_admin_dialog_btn_edit').click(function () {
    //获取数据
    var id = $('#home_admin_main_admin_dialog_id').val();
    var account = $('#home_admin_main_admin_dialog_account').val();
    var pwd = $('#home_admin_main_admin_dialog_pwd').val();
    var name = $('#home_admin_main_admin_dialog_name').val();
    var sex = $('#home_admin_main_admin_dialog_sex_man').is(':checked')?'男':'女';
    var birthday = $('#home_admin_main_admin_dialog_birthday').val();
    var age = $('#home_admin_main_admin_dialog_age').val();
    var idcard = $('#home_admin_main_admin_dialog_idcard').val();
    var addr = $('#home_admin_main_admin_dialog_addr').val();
    //数据校验
    if (pwd == '') {
        alert('请输入密码!');
        return;
    }
    if (birthday == '') {
        alert('请选择生日!');
        return;
    }
    if (idcard == '') {
        alert('请输入身份证!');
        return;
    }
    if (addr == '') {
        alert('请输入联系地址!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_ADMIN_EDIT_ADMIN',
        account:account,
        pwd:pwd,
        name:name,
        sex:sex,
        birthday:birthday,
        age:age,
        idcard:idcard,
        addr:addr,
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('修改成功!');
                $('#home_admin_main_admin_dialog').modal('hide');
                initAdminToAdminTable($('#home_admin_main_admin_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('修改失败!');
            }
        },
        error: function() {
            alert('服务器异常，修改失败!');
        }
    });
});

/**
 * 删除管理员
 * @param id
 */
function delAdmin(id) {
    initAdminToAdminDialog();
    $('#home_admin_main_admin_dialog_warn').show();
    $('#home_admin_main_admin_dialog_btn_del').show();
    $('#home_admin_main_admin_dialog_label').html('删除管理员');
    $('#home_admin_main_admin_dialog_id').val(id);
}

/**
 * 绑定删除管理员按钮
 */
$('#home_admin_main_admin_dialog_btn_del').click(function () {
    //获取数据
    var id = $('#home_admin_main_admin_dialog_id').val();
    //数据封装
    var data = {
        action:'ACTION_ADMIN_DEL_ADMIN',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('删除成功!');
                $('#home_admin_main_admin_dialog').modal('hide');
                initAdminToAdminTable($('#home_admin_main_admin_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('删除失败!');
            }
        },
        error: function() {
            alert('服务器异常，删除失败!');
        }
    });
});

/**
 * 绑定分配为员工按钮
 */
$('#home_admin_main_admin_dialog_btn_power').click(function () {
//获取数据
    var id = $('#home_admin_main_admin_dialog_id').val();
    //数据封装
    var data = {
        action:'ACTION_ADMIN_POWER_ADMIN',
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('权限分配成功!');
                $('#home_admin_main_admin_dialog').modal('hide');
                initAdminToAdminTable($('#home_admin_main_admin_table').bootstrapTable('getOptions').pageNumber);
            } else {
                alert('权限分配失败!');
            }
        },
        error: function() {
            alert('服务器异常，权限分配失败!');
        }
    });
});

/**
 * 初始化用户页面
 */
function initUser() {
    //显示用户页面
    $('#home_user').show();
    //员工页面菜单初始化
    var menu = getUrlParam("menu");
    if (null==menu||''==menu) {
        //写日志
        $('#home_user_nav_log').css('background','#57606f');
        initUserToLog();
    } else {
        switch (menu) {
            case '0':
                //写日志
                $('#home_user_nav_log').css('background','#57606f');
                initUserToLog();
                break;
            case '1':
                //我的日志
                $('#home_user_nav_my').css('background','#57606f');
                initUserToMy();
                break;
            case '2':
                //个人资料
                $('#home_user_nav_info').css('background','#57606f');
                initUserToInfo();
                break;
        }
    }
    //绑定导航栏按钮点击事件
    $('#home_user_nav_log').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0";
    });
    $('#home_user_nav_my').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1";
    });
    $('#home_user_nav_info').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=2";
    });
}

/**
 * 初始化写日志页面
 */
function initUserToLog() {
    $('#home_user_main_log').show();
    //填充日志的代码，做个备份
    //$('.best-editor').html('<p>aaaa</p>');
    //判断日志类型
    var log = getUrlParam("log");
    if (log == null || '' == log) {
        $('#home_user_main_log_nav_week').css('background','#fff');
        $('#home_user_main_log_nav_week').css('color','#000');
        $('#home_user_main_log_type').val('0');
    } else {
        switch (log) {
            case '0':
                $('#home_user_main_log_nav_week').css('background','#fff');
                $('#home_user_main_log_nav_week').css('color','#000');
                $('#home_user_main_log_type').val('0');
                break;
            case '1':
                $('#home_user_main_log_nav_month').css('background','#fff');
                $('#home_user_main_log_nav_month').css('color','#000');
                $('#home_user_main_log_type').val('1');
                break;
            case '2':
                $('#home_user_main_log_nav_season').css('background','#fff');
                $('#home_user_main_log_nav_season').css('color','#000');
                $('#home_user_main_log_type').val('2');
                break;
            case '3':
                $('#home_user_main_log_nav_year').css('background','#fff');
                $('#home_user_main_log_nav_year').css('color','#000');
                $('#home_user_main_log_type').val('3');
                break;
        }
    }
    //绑定日志类型的选择
    $('#home_user_main_log_nav_week').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=0";
    });
    $('#home_user_main_log_nav_month').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=1";
    });
    $('#home_user_main_log_nav_season').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=2";
    });
    $('#home_user_main_log_nav_year').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0&log=3";
    });
}

/**
 * 绑定日志提交按钮
 */
$('#home_user_main_log_ok').click(function () {
    var detail = bestEdtitor.getHTML();
    if ('<p><br></p>' == detail) {
        alert('请输入日志内容!');
    } else {
        //数据封装
        var data = {
            action:'ACTION_USER_ADD_LOG',
            detail:detail,
            type:$('#home_user_main_log_type').val(),
            time:getNowFormatDate(),
            user:getUrlParam("id")
        };
        $.ajax({
            type: 'post',
            url: '/home/action',
            dataType: "json",
            data: data,
            success: function (res) {
                if (res) {
                    alert('上传完成!');
                    window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=0";
                } else {
                    alert('上传失败!');
                }
            },
            error: function() {
                alert('服务器异常，上传失败!');
            }
        });
    }
});

/**
 * 初始化我的日志
 */
function initUserToMy() {
    $('#home_user_main_my').show();
    //判断当前日志类型
    var log = getUrlParam("log");
    if (log == null || '' == log || 'null' == log) {
        $('#home_user_main_my_nav_week').css('background','#fff');
        $('#home_user_main_my_nav_week').css('color','#000');
        $('#home_user_main_my_type').val('0');
    } else {
        switch (log) {
            case '0':
                $('#home_user_main_my_nav_week').css('background','#fff');
                $('#home_user_main_my_nav_week').css('color','#000');
                $('#home_user_main_my_type').val('0');
                break;
            case '1':
                $('#home_user_main_my_nav_month').css('background','#fff');
                $('#home_user_main_my_nav_month').css('color','#000');
                $('#home_user_main_my_type').val('1');
                break;
            case '2':
                $('#home_user_main_my_nav_season').css('background','#fff');
                $('#home_user_main_my_nav_season').css('color','#000');
                $('#home_user_main_my_type').val('2');
                break;
            case '3':
                $('#home_user_main_my_nav_year').css('background','#fff');
                $('#home_user_main_my_nav_year').css('color','#000');
                $('#home_user_main_my_type').val('3');
                break;
        }
    }
    //绑定日志类型的选择
    $('#home_user_main_my_nav_week').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=0";
    });
    $('#home_user_main_my_nav_month').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=1";
    });
    $('#home_user_main_my_nav_season').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=2";
    });
    $('#home_user_main_my_nav_year').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=3";
    });
    //判断当前类型
    var state = getUrlParam("state");
    if (state == null || '' == state) {
        $('#home_user_main_my_nav_check').css('background','#fff');
        $('#home_user_main_my_nav_check').css('color','#000');
        $('#home_user_main_my_state').val('0');
    } else {
        switch (state) {
            case '0':
                $('#home_user_main_my_nav_check').css('background','#fff');
                $('#home_user_main_my_nav_check').css('color','#000');
                $('#home_user_main_my_state').val('0');
                break;
            case '1':
                $('#home_user_main_my_nav_rework').css('background','#fff');
                $('#home_user_main_my_nav_rework').css('color','#000');
                $('#home_user_main_my_state').val('1');
                break;
            case '2':
                $('#home_user_main_my_nav_ok').css('background','#fff');
                $('#home_user_main_my_nav_ok').css('color','#000');
                $('#home_user_main_my_state').val('2');
                break;
        }
    }
    $('#home_user_main_my_nav_check').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=" + getUrlParam("log") + "&state=0";
    });
    $('#home_user_main_my_nav_rework').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=" + getUrlParam("log") + "&state=1";
    });
    $('#home_user_main_my_nav_ok').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=1&log=" + getUrlParam("log") + "&state=2";
    });
    initUserToMyTable(1);
}

/**
 * 初始化我的日志表
 * @param pageNumber
 */
function initUserToMyTable(pageNumber) {
//初始化表格
    var table = new TableInit();
    //配置表格参数
    var parm = {
        url:'/home/action',
        data:{action:'ACTION_USER_GET_LOG',id:getUrlParam("id"),type:$('#home_user_main_my_type').val(),state:$('#home_user_main_my_state').val()},
        id:'#home_user_main_my_table',
        toolbar:'',
        pageNumber:pageNumber,
        search:true,
        export:false,
        columns:[{
            field: 'account',
            title: '账号',
            align: 'center'
        }, {
            field: 'name',
            title: '姓名',
            align: 'center'
        }, {
            field: 'detail',
            title: '详情',
            align: 'center',
            formatter: function (value, row, index) {
                return "<a href='#' onclick='openDetail(\"" + value + "\")' data-toggle=\"modal\" data-target=\"#home_admin_main_log_dialog\">查看</a>"
            }
        }, {
            field: 'time',
            title: '发布日期',
            align: 'center'
        }, {
            field: 'id',
            title: '操作',
            align: 'center',
            formatter: function (value, row, index) {
                var log = escape(JSON.stringify(row));
                if (row.state == 0) {
                    return "等待管理员审核";
                } else if(row.state == 1) {
                    return "<div class='btn-group'><button class='btn btn-info' onclick='editLog(\"" + log + "\")'><span class='glyphicon glyphicon-edit'></span>&nbsp;重写</button></div>";
                } else {
                    return "已完成";
                }
            }
        }]
    };
    //创建表格
    table.Init(parm);
}

/**
 * 重写日志
 * @param data
 */
function editLog(data) {
    var log = JSON.parse(unescape(data));
    $('#home_user_main_my').hide();
    $('#home_user_main_my_edit').show();
    $('#home_user_main_my_edit_txt .best-editor').html(log.detail);
    $('#home_user_main_my_edit_id').val(log.id);
}

/**
 * 绑定返回按钮
 */
$('#home_user_main_my_edit_back').click(function () {
    $('#home_user_main_my_edit').hide();
    $('#home_user_main_my').show();
});

/**
 * 绑定提交
 */
$('#home_user_main_my_edit_ok').click(function () {
    var detail = bestEdtitor_back.getHTML();
    var id = $('#home_user_main_my_edit_id').val();
    if ('<p><br></p>' == detail) {
        alert('请输入日志内容!');
    } else {
        //数据封装
        var data = {
            action:'ACTION_USER_EDIT_LOG',
            detail:detail,
            id:id
        };
        $.ajax({
            type: 'post',
            url: '/home/action',
            dataType: "json",
            data: data,
            success: function (res) {
                if (res) {
                    alert('重写完成!');
                    $('#home_user_main_my_edit').hide();
                    $('#home_user_main_my').show();
                    initUserToMyTable($('#home_user_main_my_table').bootstrapTable('getOptions').pageNumber);
                } else {
                    alert('重写失败!');
                }
            },
            error: function() {
                alert('服务器异常，重写失败!');
            }
        });
    }
});

/**
 * 初始化个人资料页面
 */
function initUserToInfo() {
    $('#home_user_main_info').show();
    var info = getUrlParam("info");
    if (info == null || '' == info || 'null' == info) {
        $('#home_user_main_info_nav_check').css('background','#fff');
        $('#home_user_main_info_nav_check').css('color','#000');
        $('#home_user_main_info_check').show();
        $('#home_user_main_info_check_ok').show();
        initMyInfo();
    } else {
        switch (info) {
            case '0':
                $('#home_user_main_info_nav_check').css('background','#fff');
                $('#home_user_main_info_nav_check').css('color','#000');
                $('#home_user_main_info_check').show();
                $('#home_user_main_info_check_ok').show();
                initMyInfo();
                break;
            case '1':
                $('#home_user_main_info_nav_pwd').css('background','#fff');
                $('#home_user_main_info_nav_pwd').css('color','#000');
                $('#home_user_main_info_pwd').show();
                $('#home_user_main_info_pwd_ok').show();
                initMyPwd();
                break;
        }
    }
    //绑定类型的选择
    $('#home_user_main_info_nav_check').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=2&info=0";
    });
    $('#home_user_main_info_nav_pwd').click(function () {
        window.location = "/home/view?id=" + getUrlParam("id") + "&name=" + getUrlParam("name") + "&power=" + getUrlParam("power") + "&menu=2&info=1";
    });
}

/**
 * 初始化我的个人资料
 */
function initMyInfo() {//绑定出生日期选择组件
    $('#home_user_main_info_check_birthday').datetimepicker({
        format: 'yyyy-mm-dd',
        weekStart: 1,
        autoclose: true,
        startView: 2,
        minView: 2,
        initialDate: new Date(),
        forceParse: true,
        bootcssVer:3,
        language: 'zh-CN'
    });
    //实时自动计算年龄
    $('#home_user_main_info_check_birthday').change(function () {
        $('#home_user_main_info_check_age').val(jsGetAge($(this).val()));
    });
    //获取用户资料
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data:{action:'ACTION_USER_GET_INFO',id:getUrlParam("id")},
        success: function (res) {
            //填充数据
            $('#home_user_main_info_check_account').val(res.account);
            $('#home_user_main_info_check_pwd').val(res.pwd);
            $('#home_user_main_info_check_name').val(res.name);
            $('#home_user_main_info_check_birthday').val(res.birthday);
            $('#home_user_main_info_check_age').val(res.age);
            $('#home_user_main_info_check_idcard').val(res.idcard);
            $('#home_user_main_info_check_addr').val(res.addr);
            var sex = res.sex=='男'?true:false;
            if (sex) {
                $("#home_user_main_info_check_sex_man").attr("checked","checked");
            } else {
                $("#home_user_main_info_check_sex_woman").attr("checked","checked");
            }
        },
        error: function () {
            alert('获取个人资料失败!');
            $('#home_user_nav_log').click();
        }
    });
}

/**
 * 绑定保存个人资料按钮
 */
$('#home_user_main_info_check_ok').click(function () {
    //获取数据
    var id = getUrlParam("id");
    var account = $('#home_user_main_info_check_account').val();
    var pwd = $('#home_user_main_info_check_pwd').val();
    var name = $('#home_user_main_info_check_name').val();
    var sex = $('#home_user_main_info_check_sex_man').is(':checked')?'男':'女';
    var birthday = $('#home_user_main_info_check_birthday').val();
    var age = $('#home_user_main_info_check_age').val();
    var idcard = $('#home_user_main_info_check_idcard').val();
    var addr = $('#home_user_main_info_check_addr').val();
    //数据校验
    if (pwd == '') {
        alert('请输入密码!');
        return;
    }
    if (birthday == '') {
        alert('请选择生日!');
        return;
    }
    if (idcard == '') {
        alert('请输入身份证!');
        return;
    }
    if (addr == '') {
        alert('请输入联系地址!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_USER_EDIT_INFO',
        account:account,
        pwd:pwd,
        name:name,
        sex:sex,
        birthday:birthday,
        age:age,
        idcard:idcard,
        addr:addr,
        id:id
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('保存成功!');
                $('#home_user_main_info_nav_check').click();
            } else {
                alert('保存失败!');
            }
        },
        error: function() {
            alert('服务器异常，保存失败!');
        }
    });
});

/**
 * 初始化修改密码
 */
function initMyPwd() {
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data:{action:'ACTION_USER_GET_INFO',id:getUrlParam("id")},
        success: function (res) {
            //填充数据
            $('#home_user_main_info_pwd_now').val(res.pwd);
        },
        error: function () {
            alert('服务器走丢啦!');
            $('#home_user_nav_log').click();
        }
    });
}

/**
 * 绑定修改密码按钮
 */
$('#home_user_main_info_pwd_ok').click(function () {
    var old_pwd = $('#home_user_main_info_pwd_old').val();
    var new_pwd = $('#home_user_main_info_pwd_new').val();
    var now_pwd = $('#home_user_main_info_pwd_now').val();
    if (old_pwd == '') {
        alert('请输入旧密码!');
        return;
    }
    if (new_pwd == '') {
        alert('请输入新密码!');
        return;
    }
    if (new Base64().encode(old_pwd) != now_pwd) {
        alert('旧密码错误!');
        return;
    }
    //数据封装
    var data = {
        action:'ACTION_USER_EDIT_PWD',
        pwd:new_pwd,
        id:getUrlParam("id")
    };
    $.ajax({
        type: 'post',
        url: '/home/action',
        dataType: "json",
        data: data,
        success: function (res) {
            if (res) {
                alert('修改成功!');
                $('#home_user_main_info_nav_pwd').click();
            } else {
                alert('修改失败!');
            }
        },
        error: function() {
            alert('服务器异常，修改失败!');
        }
    });
});

/**
 * 获取url中的指定参数
 * @param {any} name
 */
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数
    var r = window.location.search.substr(1).match(reg);
    //返回参数值
    if (r != null)
        return decodeURI(r[2]);
    return null;
}

/**
 * 手机号校验
 * @param phone
 * @returns {boolean}
 */
function isPoneAvailable(phone) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}

/**
 * 文本转html
 * @param strValue
 * @returns {string}
 */
function getFormatCode(strValue) {
    return strValue.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
}

/**
 * html转文本
 * @param strValue
 * @returns {string}
 */
function setFormatCode(strValue) {
    return strValue.replace(/<br\/>/g, '\r\n').replace(/<br\/>/g, '\n').replace(/<br>/g, '\n').replace(/&nbsp;/g, ' ');
}

/**
 * 获取当前日期
 * @returns {string}
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}

/**
 * 自动计算年龄
 * @param strBirthday
 * @returns {number}
 */
function jsGetAge(strBirthday){
    var returnAge;
    var strBirthdayArr=strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];
    var d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();
    if(nowYear == birthYear){
        returnAge = 0;//同年 则为0岁
    }
    else{
        var ageDiff = nowYear - birthYear ; //年之差
        if(ageDiff > 0){
            if(nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if(dayDiff < 0)
                {
                    returnAge = ageDiff - 1;
                }
                else
                {
                    returnAge = ageDiff ;
                }
            }
            else
            {
                var monthDiff = nowMonth - birthMonth;//月之差
                if(monthDiff < 0)
                {
                    returnAge = ageDiff - 1;
                }
                else
                {
                    returnAge = ageDiff ;
                }
            }
        }
        else
        {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnAge;//返回周岁年龄
}