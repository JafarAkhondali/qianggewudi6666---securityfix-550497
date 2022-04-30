document.getElementById("qq").onmouseover=function(e){
    if(e.target.nodeName==="A"){
        var a=e.target.getAttribute("data-q")
        var b=document.getElementById("ww").children
        var c=document.getElementById("qq").children
        for(var i=0;i<b.length;i++){
            b[i].style.display="none"
        }
        b[a].style.display="block"
        for(var i=0;i<c.length;i++){
            c[i].style.borderBottom="none"
        }
        c[a].style.borderBottom="2px solid #0365c8"
    }
}
document.getElementById("aa").onmouseover=function(e){
    if(e.target.nodeName==="IMG"){
        var a=e.target.getAttribute("data-w")
        var b=document.getElementById("ss").children
        for(var i=0;i<b.length;i++){
            b[i].style.display="none"
        }
        b[a].style.display="block"
    }
}