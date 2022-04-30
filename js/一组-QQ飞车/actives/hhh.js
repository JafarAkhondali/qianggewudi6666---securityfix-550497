document.getElementById("zy6").onfocus = function () {
    if (this.value == "请输入作品名称") {
        this.value = "";
    }
}
document.getElementById("zy6").onblur = function () {
    if (this.value == "") {
        this.value = "请输入作品名称";
    }
}
var z = document.getElementById("zy6")
var z1 = document.getElementById("zy8")
z.onfocus = function () {
    z1.style.display = "block"
}
z.onblur = function () {
    z1.style.display = "none"
}
var z2 = document.getElementById("zy42")
var z3 = document.getElementById("zy47")
z2.onmousemove = function () {
    z3.style.display = "block"
}
z2.onmouseout = function () {
    z3.style.display = "none"
}
var js, cs
function Time() {
    cs = setTimeout(function () {
        var p = document.getElementById("aaa").children
        var l = document.getElementById("imgs").firstElementChild.getAttribute("data-index")
        for (var i = 0; i < p.length; i++) {
            p[i].className = ""
        }
        l++
        if (l > 3) { l = 0 }
        p[l].className = "back"
        js = setInterval(scro, 10);
    }, 2000)
}
function scro() {
    document.getElementById("view").scrollLeft += 12
    if (document.getElementById("view").scrollLeft >= 1200) {
        document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
        document.getElementById("view").scrollLeft = 0
        clearInterval(js)
        Time()
    }
}
Time()
// 点击小点
document.getElementById("aaa").onclick = function (e) {
    if (e.target.nodeName === "P") {
        // 清除计时器  超时
        clearTimeout(cs)
        clearInterval(js)
        if (document.getElementById("view").scrollLeft != 0) {
            document.getElementById("view").scrollLeft = 0
            document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
        }
        // 改变小点位置
        var y = document.getElementById("aaa").children
        for (var i = 0; i < y.length; i++) {
            y[i].className = ""
        }
        e.target.className = "back"
        // 改变图片
        var x = e.target.getAttribute("data-index")
        var z = document.getElementById("imgs").firstElementChild.getAttribute("data-index")
        for (var j = 0; j < 10; j++) {
            if (x == z) {
                break
            } else {
                document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
                z++
                if (z > 3) { z = 0 }
            }
        }
        Time()
    }
}
// 右按钮
document.getElementById("gt").onclick = function (e) {
    // 清除计时器  超时
    clearTimeout(cs)
    clearInterval(js)
    if (document.getElementById("view").scrollLeft != 0) {
        document.getElementById("view").scrollLeft = 0
        document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
    }
    // 改变图片
    document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
    // 改变小点位置
    var x = document.getElementById("imgs").firstElementChild.getAttribute("data-index")
    var y = document.getElementById("aaa").children
    for (var i = 0; i < y.length; i++) {
        y[i].className = ""
    }
    y[x].className = "back"
    Time()
}
// 左按钮
document.getElementById("lt").onclick = function (e) {
    // 清除计时器  超时
    clearTimeout(cs)
    clearInterval(js)
    if (document.getElementById("view").scrollLeft != 0) {
        document.getElementById("view").scrollLeft = 0
        document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
    }
    // 改变图片
    var z = document.getElementById("imgs").children
    for (var i = 0; i < z.length - 1; i++) {
        document.getElementById("imgs").appendChild(document.getElementById("imgs").firstElementChild)
    }
    // 改变小点位置
    var x = document.getElementById("imgs").firstElementChild.getAttribute("data-index")
    var y = document.getElementById("aaa").children
    for (var i = 0; i < y.length; i++) {
        y[i].className = ""
    }
    y[x].className = "back"
    Time()
}
document.getElementById("z").onmousemove = function (e) {
    if (e.target.nodeName === "LI") {
        var x = e.target.getAttribute("data-index");
        var y = document.getElementById("t").children;
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[x].style.display = "block"


        var h = document.getElementById("z").children;//点击背景颜色变
        for (var j = 0; j < h.length; j++) {
            h[j].className = "";
        }
        e.target.className = "action"
    }
}
// window.onscroll = function () {
//     if (document.documentElement.scrollTop > 800) {
//         document.getElementById("yz1").style.display = "block"
//     } else {
//         document.getElementById("yz1").style.display = "none"
//     }
// }
window.onload = function () {
    document.getElementById("yz1").onclick = function () {
        document.documentElement.scrollTop = 0;
    }
}
document.getElementById("z2").onmouseover = function (e) {
    if (e.target.nodeName === "LI") {
        var x = e.target.getAttribute("data-index");
        var y = document.getElementById("t2").children;
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[x].style.display = "block"


        var h = document.getElementById("z2").children;//点击背景颜色变
        for (var j = 0; j < h.length; j++) {
            h[j].className = "";
        }
        e.target.className = "action2"
    }
}
document.getElementById("zy136").onfocus = function () {
    if (this.value == "请输入作品名称") {
        this.value = "";
    }
}
document.getElementById("zy136").onblur = function () {
    if (this.value == "") {
        this.value = "请输入作品名称"
    }
}
window.onscroll = function () {
    if (document.documentElement.scrollTop > 800) {
        document.getElementById("frame9").style.display = "block"
    } else {
        document.getElementById("frame9").style.display = "none"
    }
}
document.getElementById("z3").onmouseover = function (e) {
    if (e.target.nodeName === "LI") {
        var x = e.target.getAttribute("data-index");
        var y = document.getElementById("t3").children;
        for (var i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        y[x].style.display = "block"


        var h = document.getElementById("z3").children;//点击背景颜色变
        for (var j = 0; j < h.length; j++) {
            h[j].className = "";
        }
        e.target.className = "action3"
    }
}