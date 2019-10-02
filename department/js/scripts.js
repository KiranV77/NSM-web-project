$('.course-item a').click(function(){
    if($(this).parent().next().hasClass("show")){
        $('.course-item').css('display','inline-block')
        if($(this).hasClass("text-success")){
            $(this).removeClass("text-success")
        }
    }
    else{
        $(this).parent().css({"display":"block"})
        $(this).parent().parent().children().children().removeClass("text-success")
        $(this).addClass("text-success")
        $(this).parent().parent().find(".show").removeClass("show")
        //console.log($(this).next().hasClass("show"))
    }
    
    
})