$(function(){
    $.max=function(a){
    var b=a[0]
            $.each(a,function(index,value){
                if(b<value){
                    b=value
                }
            })
            return b
        }
})
$(function(){
    $.fn.extend({
        a:function(a){
            return this.each(function(){
                $("#qq").on("mouseover","p",function(){
                    $(this).next().show().siblings("ul").hide()
                })
            })
        }
    })
})