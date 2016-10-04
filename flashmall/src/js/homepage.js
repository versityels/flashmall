/**
 * Created by my on 2016/9/29.
 */
$(function(){
    //轮播图
    var drinkTurn = $(".drinkTurn");
    var _width = drinkTurn.children().width();
    var span1 = $("#turnPic1 span");
    var span2 = $("#turnPic2 span");
    var span3 = $("#turnPic3 span");

    //图片上的点  图片所在的ul 下标 定时器时间  是否自动播放
    function changPic(objSpan,objUl,num,time,isFlag){
        //点击 切换图片
        var index = 0;
        objSpan.eq(0).css("backgroundColor","red");
        objSpan.click(function(){
            clearInterval(objUl.eq(num).timer);
            index = $(this).index();
            if(index == 3){
                index = 0;
            }
            objSpan.css("backgroundColor","#000");
            $(this).css("backgroundColor","red");
            $(objUl).eq(num).animate({left:-(index * _width)});
        })
        //自动轮播
        if(isFlag){
            objUl.eq(num).timer = setInterval(function(){
                if(index == 3){
                    index = 0;
                    $(objUl).eq(num).css("left","0");
                }
                $(objUl).eq(num).animate({left : -index * _width - _width});
                index++;
                objSpan.css("backgroundColor","#000");
                objSpan.eq(index == 3 ? 0 : index).css("backgroundColor","red");
            },time)
        }
    }

    changPic(span1,drinkTurn,0,2000,true);
    changPic(span2,drinkTurn,1,2500,true);
    changPic(span3,drinkTurn,2,3000,true);

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

    //鼠标移上 改变透明度 边框
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
            $(this).css({opacity:"0.2",border:"1px solid #ff3333"});
        },
        function(){
            $(this).css({opacity:"1",border:"1px solid #fff"});
        }
    )
    WeChatDls.unbind();
    bottomDls.unbind();
});



//封装函数  点父亲，图片父亲,图片名称，激活的Class ，图片最大数，最小数，是否需要自动播放
function adScroll(objUl,objImg,objImgName,activeClass,_max,_time,isFlage){
    //一定要先清空phoIndex；这样才不会重复
    var phoIndex = 0;
    $(objUl+" li").css("cursor","pointer");
    $(objUl+" li").bind("click", function () {
        clearInterval(objUl.timer);
        phoIndex =  $(this).index();
        if(phoIndex==-1){
            phoIndex =0;
        }
        $(objImg+" img").get(0).src = "../images/" + objImgName+ (phoIndex+1)+".jpg";
        $(objUl).children().removeClass(activeClass);
        $(this).addClass(activeClass);
    })
    //自动播放
    if(isFlage){

        phoScroll();
        function phoScroll(){
            clearInterval(objUl.timer);
            objUl.timer=setInterval(function(){
                if(phoIndex == _max){
                    phoIndex = -1 ;
                }
                phoIndex++;
                $(objImg+" img").get(0).src = "../images/" + objImgName+ (phoIndex+1)+".jpg";
                $(objUl).children().removeClass(activeClass);
                $(objUl+" li").eq(phoIndex).addClass(activeClass);
            },_time);
        }
    }

}