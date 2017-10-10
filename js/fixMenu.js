//菜单随着屏幕滚动显示消失
var body=$("body");
$(document).scroll(function(){
    if(body.scrollTop()>=55){
        $(".fixMenu").fadeIn(500)
    }
    if(body.scrollTop()<55){
        $(".fixMenu").fadeOut(500)
    }
});



//官方渠道随鼠标指针显示消失
$("#js-official-way").mouseenter(function(){

    $(".guanfangqudao").animate({
        height:200+"px"
    },500)
});
$(".guanfangqudao").mouseleave(function(){

    $(".guanfangqudao").animate({
        height:0
    },500)
});