<%--
  Created by IntelliJ IDEA.
  User: 苏学坤
  Date: 2019/4/18
  Time: 2:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>员工管理系统</title>
    <link rel="stylesheet" href="../css/libs/bootstrap.css">
    <link rel="stylesheet" href="../css/base.css">
</head>
<body class="LoginBody">
<%--全屏视频播放背景--%>
<video id="bg_video" autoplay loop muted></video>
<%--封面--%>
<div id="bg_cover" class="LoginCover"></div>
<%--蒙板--%>
<div class="LoginOverlay"></div>
<%--登录框--%>
<div class="LoginBg">
    <div class="LoginLogo">
        <%--LOGO--%>
        <img src="../image/logo.png">
    </div>
    <%--登录--%>
    <div>
        <div class="LoginEditBg">
            <img src="../image/icon/用户.png">
            <input id='name' type='text' placeholder='请输入账号' autocomplete='off'>
        </div>
        <div class="cf" style="margin-bottom: 20px;"></div>
        <div class="LoginEditBg">
            <img src="../image/icon/密码.png">
            <input id='pwd' type='password' placeholder='请输入密码' autocomplete='off'>
        </div>
        <div class="cf" style="margin-bottom: 20px;"></div>
        <div class="cf" style="margin-bottom: 20px;"></div>
        <div id="login" class="LoginButton"></div>
    </div>
</div>
<script src="../js/libs/jquery-3.3.1.js"></script>
<script src="../js/libs/bootstrap.js"></script>
<script src="../js/libs/bideo.js"></script>
<script src="../js/login.js"></script>
</body>
</html>
