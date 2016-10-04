/**
 * Created by my on 2016/9/29.
 */

//切换注册方式
var phoneSign = $(".phoneSign");
var mailSign = $(".mailSign");
var verifyNum = $(".verifyNum");
//切换成手机号注册
phoneSign.bind("click",function(){
    $(this).removeClass("hide").addClass("show");
    mailSign.addClass("hide");
    $(".under").show();
    $(".under1").hide();
    verifyNum.html("点击获取验证码");
    verifyNum.css("backgroundColor","#5cb85c")
});
//切换成邮箱注册
mailSign.bind("click",function(){
    $(this).removeClass("hide").addClass("show");
    phoneSign.addClass("hide");
    $(".under").hide();
    $(".under1").show();
    verifyNum.html("点击获取验证码");
    verifyNum.css("backgroundColor","#5cb85c")
})


//获取验证码
var arr = new Array(4);
verifyNum.bind("click",function(){
    var str = "";
    $(this).css({backgroundColor:"#ccc",fontSize:"14px"});
    for(var i = 0; i < arr.length;i++){
        arr[i] = parseInt(Math.random()*74 + 48);
        if(arr[i] >= 48 && arr[i] <= 57 || arr[i] >= 65 && arr[i] <= 90 || arr[i] >= 97 && arr[i] <= 122){
            str += String.fromCharCode(arr[i])
        }else{
            i--;
        }
    }
    verifyNum.html(str);
});


//手机号注册时的正则函数
function reqTest(obj,num,req){
    var $obj = $(obj);
    if($obj.val()==""){
        $(".under span").eq(num).html("内容不能为空");
        $(".under span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
        return false;
    }else if(!req.test($obj.val())){
        $(".under span").eq(num).html("请输入正确的格式")
        $(".under span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
        return false;
    }else if($obj.val() == $.cookie.getSub($obj.val(),"userName")){
        $(".under span").eq(num).html("该账号已被注册");
        $(".under span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
    }
    else{
        $(".under span").eq(num).html("√");
        $(".under span").eq(num).css({color:"#3f3",fontWeight:"bold"});
        return true;
    }
}

//手机号验证
var phone = $("#phone");
phone.bind("blur",function(){
    reqTest(phone,0,/^1[3,5,7,8]\d{9}$/)
});

//手机号验证时的验证码验证
var vry = $("#vry");
var vryNext = $("#vry + span");
vryNext.addClass("correct");
vry.bind("blur",function(){
    if($(this).val() == vryNum.html()){
        vryNext.html("√");
        vryNext.css({color:"#3f3",fontWeight:"bold",marginTop : "10px"});
    }else{
        vryNext.html("验证码不正确");
        $(this).focus();
    }
})
//手机号注册时的密码验证
var pwd = $("#pwd");
pwd.bind("blur",function(){
    reqTest(pwd,2,/^[a-zA-Z0-9_-]{6,18}$/);
});
//邮箱注册时的变量
var phone1 = $("#phone1");
var vry1 = $("#vry1");
var pwd1 = $("#pwd1");
var vryNum =  $(".verifyNum");


//邮箱注册时的正则函数
function reqTest1(obj,num,req){
    var $obj = $(obj);
    if($obj.val()==""){
        $(".under1 span").eq(num).html("内容不能为空");
        $(".under1 span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
        return false;
    }else if(!req.test($obj.val())){
        $(".under1 span").eq(num).html("请输入正确的格式")
        $(".under1 span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
        return false;
    }else if($obj.val() == $.cookie.getSub($obj.val(),"userName")){
        $(".under1 span").eq(num).html("该账号已被注册");
        $(".under1 span").eq(num).css({marginLeft:"5px",color : "#ff3333"});
    }
    else{
        $(".under1 span").eq(num).html("√");
        $(".under1 span").eq(num).css({color:"#3f3",fontWeight:"bold"});
        return true;
    }
}

//邮箱验证
var mail = $("#mail");
mail.bind("blur",function(){
    reqTest1(mail,0,/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
});
//邮箱验证码 验证
var vry1 = $("#vry1");
var vryNext1 = $("#vry1 + span");
vryNext1.addClass("correct");
vry1.bind("blur",function(){
    if($(this).val() == vryNum.html()){
        vryNext1.html("√");
        vryNext1.css({color:"#3f3",fontWeight:"bold"});
    }else{
        vryNext1.html("验证码不正确");
        vryNext1.css({color:"#ff3333",fontWeight:"500"});
    }
})
//邮箱密码验证
var pwd1 = $("#pwd1");
pwd1.bind("blur",function(){
    reqTest1(pwd1,2,/^[a-zA-Z0-9_-]{6,18}$/);
});

//手机号注册时的注册按钮
$(".btnSign").eq(0).bind("click",function(){
    if( $(".under span").eq(0).html() == "√" &&
        $(".under span").eq(1).html() == "√" &&
        $(".under span").eq(2).html() == "√" &&
        $(".yet")[0].checked == true){
        alert("注册成功!");
        $.cookie.setAll($("#phone").val(),{"userName" : $("#phone").val(),"pwd" : $("#pwd").val()});
    }
    else{
        alert("注册失败,请正确填写信息")
    }
});

/*$.cookie.setAll($(".usename").val(),{"useName":$(".usename").val(),"pwd":$(".pwd").val()},2016-10-11);*/


//邮箱注册是的注册按钮
$(".btnSign").eq(1).bind("click",function(){
    if( $(".under1 span").eq(0).html() == "√" &&
        $(".under1 span").eq(1).html() == "√" &&
        $(".under1 span").eq(2).html() == "√" &&
        $(".yet")[1].checked == true){
        alert("注册成功!");
        $.cookie.setAll($("#mail").val(),{"userName" : $("#mail").val(),"pwd" : $("#pwd1").val()});
    }else{
        alert("注册失败,请正确填写信息")
    }
});

//已有账号,现在登录按钮
$(".btnLogin").bind("click",function(){
    window.open("login.html","_self");
})

