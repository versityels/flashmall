/**
 * Created by my on 2016/10/4.
 */
$(function(){
    //侧边栏
    $(window).bind("scroll",function(){
        $(".return").eq(0).stop().animate({top: $(window).scrollTop() + 170},500);
    })
    //返货首页
    $(".r1").bind("click",function(){
        window.open("../homepage.html","_self");
    })
    //返回顶部
    $(".r6").bind("click",function(){
        $("html,body").animate({scrollTop:"0"},1);
    })
    //tab切换
    var rightLis = $(".rightDown").eq(0).children();
    rightLis.eq(0).css({backgroundColor:"#ff3333",color:"#fff"});
    rightLis.bind("click",function(){
        rightLis.css({backgroundColor:"#f9e9e9",color:"#000"});
        $(this).css({backgroundColor:"#ff3333",color:"#fff"});
        switch ($(this).index()){
            case 0:
                $(".rightUp").children().hide();
                $(".rightUp").children().eq(0).show();
                break;
            case 1:
                $(".rightUp").children().hide();
                $(".rightUp").children().eq(1).show();
                break;
            case 2:
                $(".rightUp").children().hide();
                $(".rightUp").children().eq(2).show();
        }
    });

    var dls = $(".list").children();
    dls.hover(
        function(){
            $(this).css("opacity","0.5");
        },
        function(){
            $(this).css("opacity","1");
        }
    )
    //加入购物车
    /*var img1 = $("#y1");
    var img2 = $("#y2");
    var add = $(".a3");
    add.bind("click",function(){
        var pro = $(this).parent().parent().siblings().children();
        $.cookie.setAll(pro.attr("id"),{
            "id":pro.attr("id"),
            "productName" : pro.parent().siblings().children().eq(0),
            "imgSrc" : pro.attr("src");
        })
        console.log(pro.parent().siblings().children().eq(0))
    })*/
})
