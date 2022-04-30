window.onload=function(){
    // 广告
    function ad(){
        var x=$(window).width()
        if(x<=992){
            $("#Left").attr("class","")
            $("#Right").attr("class","Right2 container-fauild")
            $("#leftdiv").attr("class","none")
            $("#Left2").attr("class","Left3")
        }else{
            $("#Left").attr("class","Left")
            $("#Right").attr("class","Right container-fauild")
            $("#leftdiv").attr("class","container-fluid leftdiv")
            $("#Left2").attr("class","Left2")
        }
    }
    $(window).resize(ad)
    ad()
}