/**
 * Created by my on 2016/10/3.
 */
$(function(){
    //加减数量
    var addBtn = $(".addCount").eq(0);
    var minusBtn = $(".minusCount").eq(0);
    var count = $(".count").eq(0);
    addBtn.bind("click",function(){
        var num = parseInt(count.html());
        num += 1;
        count.html(num);
    });
    minusBtn.bind("click",function(){
        var num = parseInt(count.html());
        num -= 1;
        if(num <= 1){
            num = 1;
        }
        count.html(num);
    });
    //加入购物车
    var buyBtn = $(".buyBtn").eq(0);
    var _id = $(".pLeft").children().attr("id");
    buyBtn.bind("click",function(){
        $.cookie.setAll(_id,{
            "productName" : $(".pRight h1").eq(0).html(),
            "imgSrc" : $(".pLeft img").attr("src"),
            "name" : $(".pRight h1").eq(0).html(),
            "unitPrice" : parseFloat($(".cost span").eq(0).html()),
            "number" : parseInt($(".count").eq(0).html()),
        })
    })
    $(".buyBtn").eq(1).bind("click",function(){
        window.open("cart.html","_self");
    })

    //放大镜
    $(".pLeft").mousemove(function(event){
        $(".little").css({
            display : "block",
            left : event.pageX - 50,
            top : event.pageY - $(".pLeft").offset().top - 50
        });
        if($(".little").offset().left <= 0){
            $(".little").css("left","0");
        }
        if($(".little").offset().left >= 300){
            $(".little").css("left","300px");
        }
        if(event.pageY - $(".pLeft").offset().top - 50 <= 0){
            $(".little").css("top","0");
        }
        if(event.pageY - $(".pLeft").offset().top - 50 >= 300){
            $(".little").css("top","300px");
        }
        $(".large").css({display : "block"});
        $(".large > img").css({left : -4 * ($(".little").offset().left),top : -4 * (event.pageY - $(".pLeft").offset().top - 50)})
    })
    $(".pLeft").mouseout(function(){
        $(".little").css("display","none");
        $(".large").css("display","none");
    })

    //tab切换
    $(".option").children().eq(0).css({backgroundColor : "#15c26b",color : "#fff"})
    $(".option").children().click(function(){
        $(".option").children().css({backgroundColor : "#bbd9ca",color : "#000"});
        $(this).css({backgroundColor : "#15c26b",color : "#fff"});
        switch ($(this).index()){
            case 0:
                $(".mes").children().hide();
                $(".parameter").show();
                break;
            case 1:
                $(".mes").children().hide();
                $(".detail").show();
                break;
            case 2:
                $(".mes").children().hide();
                $(".praise").show();
                break;
        }
    })
})