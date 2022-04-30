document.querySelector(".bb").onclick=function(){
    this.style.display="none"
    document.querySelector(".cc").style.display="block"
}
document.querySelector(".cc").onclick=function(){
    this.style.display="none"
    document.querySelector(".bb").style.display="block"
}