//新闻标题样式
var $tittle=$(".news_box_tittleList ul li");
var num;
$tittle.mouseenter(function(){
    num=$(this).index();
    $(this).addClass("activity");
    $(".news_allNewsContent").animate({
        left:-num*500+"px"
    })

});
$tittle.mouseleave(function(){
    $(this).removeClass("activity")
});
//新闻数据
$.ajax({
    url: "json/news.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
        for (var i = 0; i < data.news[0].latest.length; i = i + 1) {
            $(".news_allNewsContent ul:eq(0) li:eq("+(i+1)+") a").text(data.news[0].latest[i].tittle);
            $(".news_allNewsContent ul:eq(0) li:eq("+(i+1)+") em").text(data.news[0].latest[i].publishTime)
        }
        for (var j = 0; j < data.news[0].news.length; j = j + 1) {
            $(".news_allNewsContent ul:eq(1) li:eq("+j+") a").text(data.news[0].news[j].tittle);
            $(".news_allNewsContent ul:eq(1) li:eq("+j+") em").text(data.news[0].news[j].publishTime)
        }
        for (var k = 0; k < data.news[0].official.length; k = k + 1) {
            $(".news_allNewsContent ul:eq(2) li:eq("+k+") a").text(data.news[0].official[k].tittle);
            $(".news_allNewsContent ul:eq(2) li:eq("+k+") em").text(data.news[0].official[k].publishTime)
        }
        for (var l = 0; l < data.news[0].activity.length; l = l + 1) {
            $(".news_allNewsContent ul:eq(3) li:eq("+l+") a").text(data.news[0].activity[l].tittle);
            $(".news_allNewsContent ul:eq(3) li:eq("+l+") em").text(data.news[0].activity[l].publishTime)
        }
        for (var m = 0; m < data.news[0].activity.length; m = m + 1) {
            $(".news_allNewsContent ul:eq(4) li:eq("+m+") a").text(data.news[0].media[m].tittle);
            $(".news_allNewsContent ul:eq(4) li:eq("+m+") em").text(data.news[0].media[m].publishTime)
        }
    }
});








