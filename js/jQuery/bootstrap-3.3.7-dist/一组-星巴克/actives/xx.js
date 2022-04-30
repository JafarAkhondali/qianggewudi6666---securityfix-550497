// var y = document.getElementById("t").children;
// document.getElementById("z5").onclick = function (event) {
//     var e = event || window.event;
//     if (e.target.nodeName === "LI") {
//         x = e.target.getAttribute("data-index");
//         for (var i = 0; i < y.length; i++) {
//             y[i].style.display = "none";

//         }
//         y[x].style.display = "block";
//         console.log(y[x])
//     }
// }


var z = document.getElementById("z5").children;
window.addEventListener("resize", function () {
    console.log(window.innerWidth)
    if (window.innerWidth < 990) {
        for (var i = 0; i < z.length; i++) {
            z[i].setAttribute("class", "fontd1")
        }
        document.getElementById("z10").setAttribute("class", "fontd4")
        document.getElementById("z5").setAttribute("class", "fontd")
    } else {
        document.getElementById("z5").removeAttribute("class");
        document.getElementById("z10").removeAttribute("class");
        for (var j = 0; j < z.length; j++) {
            z[j].removeAttribute("class")
        }
    }

})
