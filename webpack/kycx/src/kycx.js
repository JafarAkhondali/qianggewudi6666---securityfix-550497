$(window).scroll(function(){
    if($(this).scrollTop()>=1600){
        console.log(this);
        $(".kycx3").addClass("fix1")
        alert(1)
    }
    else{
        $(".kycx3").addClass()
    }
})

