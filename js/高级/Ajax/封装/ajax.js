function ajax(method,url,send,callback){
    var a = new XMLHttpRequest()
    a.open(method, url)
    a.setRequestHeader("content-type", "application/x-www-form-urlencoded")
    if(send){
        a.send(send)
    }
    else{
        a.send()
    }
    a.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var aa = JSON.parse(this.responseText);
            callback(aa)
        }
    }
}
// function ajax(q){
//     var a = new XMLHttpRequest()
//     a.open(q.method, q.url)
//     a.setRequestHeader("content-type", "application/x-www-form-urlencoded")
//     if(q.send){
//         a.send(q.send)
//     }
//     else{
//         a.send()
//     }
//     a.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             var aa = JSON.parse(this.responseText);
//             q.callback(aa)
//         }
//     }
// }