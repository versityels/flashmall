/**
 * Created by my on 2016/9/30.
 */

//没有账号现在注册  按钮
var signBtn = $(".signBtn");
signBtn.bind("click",function(){
    window.open("sign.html","_self");
});
var admin = $(".phoneNum > input").eq(0);
var reminder = $(".incorrect");

//验证登录账号密码
var loginBtn =$(".loginBtn");
loginBtn.bind("click",function(){
    if(admin.val() == $.cookie.getSub(admin.val(),"userName") &&
       $(".phoneNum > input").eq(1).val() == $.cookie.getSub(admin.val(),"pwd")){
        reminder.html("");
        alert("登陆成功!");
    }else if(admin.val() == ""){
        reminder.html("用户名不能为空");
    }else if($(".phoneNum > input").eq(1).val() == ""){
        reminder.html("密码不能为空");
    }
    else{
        reminder.html("用户名或账号不正确");
    }
})


//忘记密码
$(".forget").eq(0).click(function(event){
    //背景
    var x = $(document).width();
    var y = $(document).height();
    var bg = document.createElement("div");
    $(bg).css({width:x + "px",height: y + "px",top: $(window).scrollTop() + "px"});
    $(bg).addClass("bg");
    $("body").append($(bg));
    //弹框
    $(".forgetPwd").css({display:"block",top:$(window).scrollTop() + 200});
    //关闭忘记密码
    $(".forUp button").click(function(){
        $(".forgetPwd").css("display","none");
        $(bg).remove();
    })
    //拖拽
    var up = $(".forUp").eq(0);
    up.mousedown(function(event){
        var _left = event.pageX - up.offset().left;
        var _top = event.pageY - up.offset().top;
        $(document).mousemove(function(event){
            $x = event.pageX - _left;
            $y = event.pageY - _top;
            $(".forgetPwd").css({left: $x ,top : $y});
        })
    });
    up.mouseup(function(){
        $(document).unbind("mousemove");
    })
})
