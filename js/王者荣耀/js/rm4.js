window.onscroll=function(){
    if(document.documentElement.scrollTop>=800){
        document.getElementById("qq").className="fix"
    }
    else{
        document.getElementById("qq").className=""
    }
}