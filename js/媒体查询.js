    window.onresize=x
    function x(){
        document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth*100/640+"px"
    }
    x()