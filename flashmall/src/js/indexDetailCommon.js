/**
 * Created by my on 2016/10/3.
 */
var menuAs = $(".menu .clearfix").children();5
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