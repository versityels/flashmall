/**
 * Created by my on 2016/10/3.
 */
$(function(){
    var cookies = document.cookie;
    if(cookies != ""){
        //创建div
        var pro1 = document.createElement("div");
        $(pro1).addClass("pro1");
        $(".goods").append(pro1);
        //创建复选框
        $(pro1).append("<input type='checkbox' class='inp'/>");
        $(pro1).append("<img src='" + $.cookie.getSub("product","imgSrc") + "' />");
        $(pro1).append("<p class='p'>" + $.cookie.getSub("product","productName") + "</p>");
        $(pro1).append("<p class='unitPrice1 p'>&yen;" + $.cookie.getSub("product","unitPrice") + "</p>");
        $(pro1).append("<button class='lessBtn'>-</button>");
        $(pro1).append("<div class='proNum'>" + $.cookie.getSub("product","number") + "</div>");
        $(pro1).append("<button class='moreBtn'>+</button>");
        $(pro1).append("<p class='allPrice'>&yen;" + $.cookie.getSub("product","unitPrice") * parseInt($(".proNum").html()) + "</p>");
        $(pro1).append("<a class='del'>删除</a>")
    }
    //减少数量
    $(".lessBtn").bind("click",function(){
        var num = parseInt($(".proNum").html());
        num -= 1;
        if(num <= 1){
            num = 1;
        }
        $(".proNum").html(num);
    })
    //增加数量
    var num = parseInt($(".proNum").html());
    var price = num * parseFloat($.cookie.getSub("product","unitPrice"));
    $(".moreBtn").bind("click",function(){
        num = parseInt($(".proNum").html());
        num += 1;
        $(".proNum").html(num);
        price = num * parseFloat($.cookie.getSub("product","unitPrice"));
        price = price.toFixed(2);
        $(".allPrice").html("&yen;" + price);
    })
    //删除操作
    $(".del").bind("click",function(){
        $(".pro1").remove();
        $.cookie.unsetAll("product");
    })

    //复选框被选中时
    var checkBoxs = $("input:checkbox")
    checkBoxs.bind("click",function(){
        //console.log($("input:checked"));
        if($("input:checkbox:checked")){
            $(".totalPrice p").eq(0).children().html(price);
        }
    })
})