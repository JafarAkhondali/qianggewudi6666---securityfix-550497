
//划入加before
document.getElementById("navul").onclick=function(e){
    if(e.target.nodeName=="SPAN"){
        var ulc=document.getElementById("navul").children
        for(let i=0;i<ulc.length;i++){
            ulc[i].className="";
        }
        e.target.parentNode.className="act"
    }
}

//划入显示二级导航
document.getElementById("navul").onmouseover=function(e){
    if(e.target.nodeName=="SPAN"){
        var lindex=e.target.getAttribute("data-index")
        if(lindex!=6){
            document.getElementById("navdiv").style.display="block"
            // console.log(e.target)
            var navdivchild=document.getElementById("navdiv").children
            // console.log(navdivchild)      
            // console.log(lindex)
            for(var i=0;i<navdivchild.length;i++){
               navdivchild[i].style.display="none"      
            }
            navdivchild[lindex].style.display="flex"
        }      
    }
}
document.getElementById("navdiv").onmouseover=function(){
    document.getElementById("navdiv").style.display="block"
}
document.getElementById("navdiv").onmouseout=function(){
    document.getElementById("navdiv").style.display="none"
}
