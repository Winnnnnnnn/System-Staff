$(function () {
    //绑定登录按钮
    $('#login').click(function () {
        var name = $('#name').val();
        var pwd = $('#pwd').val();
        if ('' == name || '' == pwd) {
            alert('登录数据无效!');
        } else {
            var data = {
                action:'ACTION_LOGIN',
                account:name,
                pwd:pwd
            };
            $.ajax({
                type: 'post',
                url: '/login/action',
                dataType: "json",
                data: data,
                success: function (res) {
                    //登录成功
                    window.location = '/home/view?id=' + res.id + '&name=' + res.name + '&power=' + res.power;
                },
                error: function () {
                    alert('用户名/密码错误!');
                }
            });
        }
    });
    //监听用户按键
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            //回车绑定登录按钮
            $('#login').click();
        }
        if (event.keyCode == 40) {
            //向下键绑定密码输入框
            $('#pwd').focus();
        }
        if (event.keyCode == 38) {
            //向上键绑定用户名输入框
            $('#name').focus();
        }
    });
});
(function () {
    var bv = new Bideo();
    bv.init({
        //获取视频播放控件
        videoEl: document.querySelector('#bg_video'),
        //获取根布局
        container: document.querySelector('body'),
        // Resize
        resize: true,
        //控制手机屏幕
        isMobile: window.matchMedia('(max-width: 768px)').matches,
        //设置视频播放资源
        src: [
            {
                src: '../data/For_Wes.mp4',
                type: 'video/mp4'
            }
        ],

        //加载完成后隐藏封面
        onLoad: function () {
            document.querySelector('#bg_cover').style.display = 'none';
        }
    });
}());