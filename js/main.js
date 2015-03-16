// JavaScript Document


//幻灯片
$(function(){
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
});





//图片滚动 调用方法 imgscroll({speed: 30,amount: 1,dir: "up"});
$.fn.imgscroll = function(o){
    var defaults = {
        speed: 40,
        amount: 0,
        width: 1,
        dir: "left"
    };
    o = $.extend(defaults, o);

    return this.each(function(){
        var _li = $("li", this);
        _li.parent().parent().css({overflow: "hidden", position: "relative"}); //div
        _li.parent().css({margin: "0", padding: "0", overflow: "hidden", position: "relative", "list-style": "none"}); //ul
        _li.css({position: "relative", overflow: "hidden"}); //li
        if(o.dir == "left") _li.css({float: "left"});

//初始大小
        var _li_size = 0;
        for(var i=0; i<_li.size(); i++)
            _li_size += o.dir == "left" ? _li.eq(i).outerWidth(true) : _li.eq(i).outerHeight(true);

//循环所需要的元素
        if(o.dir == "left") _li.parent().css({width: (_li_size*3)+"px"});
        _li.parent().empty().append(_li.clone()).append(_li.clone()).append(_li.clone());
        _li = $("li", this);

//滚动
        var _li_scroll = 0;
        function goto(){
            _li_scroll += o.width;
            if(_li_scroll > _li_size)
            {
                _li_scroll = 0;
                _li.parent().css(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll });
                _li_scroll += o.width;
            }
            _li.parent().animate(o.dir == "left" ? { left : -_li_scroll } : { top : -_li_scroll }, o.amount);
        }

//开始
        var move = setInterval(function(){ goto(); }, o.speed);
        _li.parent().hover(function(){
            clearInterval(move);
        },function(){
            clearInterval(move);
            move = setInterval(function(){ goto(); }, o.speed);
        });
    });
};


<!--选项卡切换-->

$(function(){
    window.onload = function()
    {
        var $span = $('.tab span');
        var $div = $('.content .tab_content');
        $span.hover(function(){
            var $this = $(this);
            var $t = $this.index();
            $span.removeClass('active');
            $this.addClass('active');
            $div.css('display','none');
            $div.eq($t).css('display','block');
        })
    }
});
<!--选项卡切换-->

<!--滚动图片-->

$(document).ready(function () {

    $(".scrollleft").imgscroll({
        speed: 140,    //图片滚动速度
        amount: 0,    //图片滚动过渡时间
        width: 1,     //图片滚动步数
        dir: "left"   // "left" 或 "up" 向左或向上滚动
    });

    $(".scrolltop").imgscroll({
        speed: 40,    //图片滚动速度
        amount: 0,    //图片滚动过渡时间
        width: 1,     //图片滚动步数
        dir: "up"   // "left" 或 "up" 向左或向上滚动
    });

});

<!--滚动图片-->




//使左右高度一样
$(function(){
    var height=$(".right_box").height();
    $(".left_box").css("height",height)

    })




    //加入收藏

    function AddFavorite(sURL, sTitle) {

        sURL = encodeURI(sURL);
        try{

            window.external.addFavorite(sURL, sTitle);

        }catch(e) {

            try{

                window.sidebar.addPanel(sTitle, sURL, "");

            }catch (e) {

                alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");

            }

        }

    }
