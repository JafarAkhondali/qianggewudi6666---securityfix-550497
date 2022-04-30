$(function(){
    $(".ee").click(function(){
        $(".qq").css("display","none")
        $(".aa").append("<div class='cc'><img src='imgs/hfq4.jpg' class='zz'><ul><li>门店</li><li>星享俱乐部</li><li>菜单</li><hr><li class='eee'>星巴克移动应用</li><li>星礼卡</li><li class='eee'><a href='pages/xingbake.html'>星巴克臻选™</a></li><li>啡快™ － 在线点 到店取</li><li class='eee'><a href='pages/xbk.html'>专星送™</a></li><li>咖啡星讲堂</li><li>上海烘焙工坊</li><li class='eee'><a href='pages/zzz.html'>关于星巴克</a></li><li class='eee'><a href='lx.html'>帮助中心</a></li><hr></ul><img src='imgs/hfq5.jpg' class='xx'></div>")
        $(".zz").click(function(){
             $(".cc").css("display","none")
             $(".qq").css("display","block")
         })
         if($(window).width()<1000){
            $(".ww").css("display","none")
        }
    })        
})