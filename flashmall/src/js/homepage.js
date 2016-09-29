/**
 * Created by my on 2016/9/29.
 */
$(function(){
    //鼠标移上显示二级菜单
    var menuAs = $(".menu .clearfix").children().children();
    menuAs.eq(1).hover(
        function(){
            $(".snackUl1").slideDown();
        },
        function(){
            $(".snackUl1").slideUp();
        }
    );
    menuAs.eq(4).hover(
        function(){
            $(".snackUl2").slideDown();
        },
        function(){
            $(".snackUl2").slideUp();
        }
    );
    menuAs.eq(5).hover(
        function(){
            $(".snackUl3").slideDown();
        },
        function(){
            $(".snackUl3").slideUp();
        }
    );
    //轮播图
    var i = 0;
    var turnTimer;
    var drinkTurn = $(".drinkTurn");
    var _width = drinkTurn.children().width();
    var span1 = $("#turnPic1 span");
    var span2 = $("#turnPic2 span");
    var span3 = $("#turnPic3 span");
    //加载时默认第一个被选中
    span1.eq(0).css("backgroundColor","red");
    span2.eq(0).css("backgroundColor","red");
    span3.eq(0).css("backgroundColor","red");

    function turnPic(){
        if(i >= 3){
            i = 0;
            drinkTurn.css("left","0");
        };
        drinkTurn.animate({left : - i * _width - _width});
        i++;
        span1.css("backgroundColor","black").eq(i == 3 ? 0 : i).css("backgroundColor","red");
        span2.css("backgroundColor","black").eq(i == 3 ? 0 : i).css("backgroundColor","red");
        span3.css("backgroundColor","black").eq(i == 3 ? 0 : i).css("backgroundColor","red");
    }

    span1.bind("click",function(){
        clearInterval(turnTimer);
        i = $(this).index();
        span1.css("backgroundColor","black").eq(i).css("backgroundColor","red");
        drinkTurn.animate({left : - i * _width});
        turnTimer = setInterval(turnPic,2000);
    })
    span2.bind("click",function(){
        clearInterval(turnTimer);
        i = $(this).index();
        span2.css("backgroundColor","black").eq(i).css("backgroundColor","red");
        drinkTurn.animate({left : - i * _width});
        turnTimer = setInterval(turnPic,2000);
    })
    span3.bind("click",function(){
        clearInterval(turnTimer);
        i = $(this).index();
        span3.css("backgroundColor","black").eq(i).css("backgroundColor","red");
        drinkTurn.animate({left : - i * _width});
        turnTimer = setInterval(turnPic,2000);
    })
    //console.log(drinkTurn);
    turnTimer = setInterval(turnPic,2000);

    //鼠标移上显示关注人数
    var drinkLis = $(".drinkList").children();
    var eatLis = $(".eatList").children();
    var snackLis = $(".snackList").children();
    var brandLis = $(".brandList").children();


    brandLis.hover(
        function(){
            $(this).children().slideDown();
        },
        function(){
            $(this).children().slideUp();
        }
    )
    drinkLis.hover(
        function(){
            $(this).children().slideDown();
        },
        function(){
            $(this).children().slideUp();
        }
    )
    eatLis.hover(
        function(){
            $(this).children().slideDown();
        },
        function(){
            $(this).children().slideUp();
        }
    )
    snackLis.hover(
        function(){
            $(this).children().slideDown();
        },
        function(){
            $(this).children().slideUp();
        }
    )

    var dls = $("dl");
    var divs = $("div");
    divs.css("border-radius","5px");
    var WeChatDls = $(".WeChat dl");
    var bottomDls = $(".bottom dl");
    dls.css({border:"1px solid #fff",borderRadius:"5px"});
    WeChatDls.css("border","none");
    bottomDls.css("border","none");
    dls.hover(
        function(){
            $(this).css("opacity","0.2");
            $(this).css("border","1px solid #ff3333");
        },
        function(){
            $(this).css("opacity","1");
            $(this).css("border","1px solid #fff");
        }
    )
    WeChatDls.unbind();
    bottomDls.unbind();
})