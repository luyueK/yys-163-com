//新闻轮播
$.ajax({
    url: "json/newsBanner.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        //console.log(data);
        for (var i = 0; i < data.newsBanner.length; i = i + 1) {
            $(".news_banner .news_bannerImg li:eq(" + i + ") img").attr("src", data.newsBanner[i].src)
        }
    }
});
var num = 0;
var boxImgLeft = parseInt($(".news_bannerImg").css("left"));
var timer;
timer = setInterval(time, 1000);
function time() {
    if (num >= 0) {
        num = -6
    }
    else {
        num = num + 1;
        numAndLeft();
        pointChoose()
    }
}
function numAndLeft() {
    boxImgLeft = num * 360;
    $(".news_bannerImg").animate({left: boxImgLeft + "px"}, 500)
}
$(".news_bannerPoint li").hover(function () {
    $(".news_bannerPoint li").css("background", "rgba(1,1,1,0)");
    $(this).css("background", "#e37b63");
    num = -($(this).index());
    clearInterval(timer);
    numAndLeft();
}, function () {
    timer = setInterval(time, 1000);
});
function pointChoose() {
    $(".news_bannerPoint li").css("background", "rgba(1,1,1,0)");
    $(".news_bannerPoint li:eq(" + (-num) + ")").css("background", "#e37b63");
}