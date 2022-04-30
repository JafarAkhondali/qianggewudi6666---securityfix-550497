function hh(url){
    return new Promise(function(resolve,reject){
        $.post(url,{"username":"zyp",
        "userpwd":"123456",
        "userclass":"70",
        "type":"4"},function(qq){
            resolve(qq)
        })
    })
  }
  async function qq() {
    var a = await hh("http://www.qhdlink-student.top/student/banner.php");
    return a;
  }
  qq().then(function(data){
        var e=JSON.parse(data)
        for(var i in e){
        var z=document.createElement("div")
        z.className="swiper-slide"
        var x=document.createElement("img")
        x.setAttribute("src","http://www.qhdlink-student.top/"+e[i].path_banner)
        z.appendChild(x)
        document.querySelector(".swiper-wrapper").appendChild(z)
        }
        var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        bulletActiveClass: 'my-bullet-active',
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        });
        })
async function ww() {
    var result = await hh("http://www.qhdlink-student.top/student/coacha.php");
    return result;
}  
ww().then(function(data){
    var aaa=JSON.parse(data)
    for(var n in aaa){
        var ii=$("<tr></tr>")
        for(var m in aaa[n]){
            var iii=$("<td></td>")
            if(m==="path_coach"){
                iii.html("<img src='"+'http://www.qhdlink-student.top/'+aaa[n][m]+"'>")
            }
            else{
                iii.html(aaa[n][m])
            }
            ii.append(iii)
        }
        $("#ee").append(ii)
    }
})   
async function ee() {
    var b = await hh("http://www.qhdlink-student.top/student/coach.php");
    return b;
}  
ee().then(function(data){
    var aaa=JSON.parse(data)
    for(var n in aaa){
        var ii=document.createElement("tr")
        for(var m in aaa[n]){
            var iii=document.createElement("td")
            if(m==="path_coach"){
                iii.innerHTML="<img src='"+'http://www.qhdlink-student.top/'+aaa[n][m]+"'>"
            }
            else{
                iii.innerHTML=aaa[n][m]
            }
            ii.appendChild(iii)
        }
        document.getElementById("eee").appendChild(ii)
    }
})      
async function rr() {
    var result = await hh("http://www.qhdlink-student.top/student/newsa.php");
    return result;
}  
rr().then(function(data){
    var aa=JSON.parse(data)
        for(var i in aa){
            var qq="<li><a href='新闻接口2.html#"+aa[i].id_news+"'>"+aa[i].title_news+"---"+aa[i].time_news+"</a></li>"
            document.getElementById("qqq").innerHTML+=qq
        }
})   
$("#qq").on("click","ul",function(){
    $("#ww").children().eq($(this).index()).stop().fadeIn().siblings().stop().hide()
})
$("#qq").on("click","ul",function(){
    $("#qq").children().eq($(this).index()).css("background","green").siblings().css("background","none")
})