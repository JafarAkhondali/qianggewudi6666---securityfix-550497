$(function(){
    $(".ww5").click(function(){
        $(window).scrollTop(0)
    })
/*     $(document).click(function(e){
        var x=e.target.getAttribute("date-index")
        if(e.target.nodeName=="LI"){
            $(".ee1").eq(x).find(".ee").toggle()
            $(".ee1").eq(x).siblings().find(".ee").hide()
        }
        else{  
            $(".ee1").find(".ee").hide()
        }
    }) */
    $(".ee1").click(function(){
        $(this).find(".ee").toggle()
        if($(this).find(".ee").css("display")!=="none"){
            $(this).css("background","url('../imgs/hfq22.jpg')").css("color","white").find("img").css("transform","rotate(180deg)")
        }
        else{
            $(this).css("background","none").css("color","black").find("img").css("transform","rotate(0)")
        }
    })
    function x(){
        $(".ee7").scrollLeft($(".ee7").scrollLeft()+500)
        if($(".ee7").scrollLeft()>=1262){
            $(".ee7").scrollLeft(0)
            $(".ee7").append($(".ee7").children().eq(0))
            clearInterval(a)
            y()
        }
    }
    var b=0
    function y(){
        setTimeout(function(){
            a=setInterval(x,100)
            b>=3?b=0:b++
            for(var i=0;i<$(".ee8").children().length;i++){
                $(".ee8").children().eq(i).css({"background":"white","width":"10","height":"10","border-radius":"50%","margin-right":"10"})
            }
            $(".ee8").children().eq(b).css({"background":"#ffb406","width":"50","height":"10","border-radius":"30px","margin-right":"10"})
        },2000)
    }
    y()
    $(".uu3").on("click","div",function(){
        $(".uu4").children().eq($(this).index()).show().siblings().hide()
    })
    $(".uu3").on("click","div",function(){
        $(".uu3").children().eq($(this).index()).css("background","linear-gradient(#26a9ff ,#0e70ff)").siblings().css("background","#f1f8ff")
    })
    function xxx(){
        $(".uu6").scrollLeft($(".uu6").scrollLeft()+200)
        if($(".uu6").scrollLeft()>=1000){
            $(".uu6").scrollLeft(0)
            $(".uu6").append($(".uu6").children().eq(0))
            clearInterval(aaa)
            yyy()
        }
    }
    var d=0
    function yyy(){
        setTimeout(function(){
            aaa=setInterval(xxx,100)
            d>=3?d=0:d++
            for(var i=0;i<$(".uu7").children().length;i++){
                $(".uu7").children().eq(i).css({"background":"#c3dbff","width":"10","height":"10","border-radius":"50%","margin-right":"10"})
            }
            $(".uu7").children().eq(d).css({"background":"#1075ff","width":"50","height":"10","border-radius":"30px","margin-right":"10"})
        },2000)
    }
    yyy()
    function xx(){
        $(".uu").scrollLeft($(".uu").scrollLeft()+200)
        if($(".uu").scrollLeft()>=1073){
            $(".uu").scrollLeft(0)
            $(".uu").append($(".uu").children().eq(0))
            clearInterval(aa)
            yy()
        }
    }
    var c=0
    function yy(){
        setTimeout(function(){
            aa=setInterval(xx,100)
            c>=1?c=0:c++
            for(var i=0;i<$(".uu1").children().length;i++){
                $(".uu1").children().eq(i).css({"background":"white","width":"10","height":"10","border-radius":"50%","margin-right":"10"})
            }
            $(".uu1").children().eq(c).css({"background":"#ffb406","width":"50","height":"10","border-radius":"30px","margin-right":"10"})
        },2000)
    }
    yy()
})