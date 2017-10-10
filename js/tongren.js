//轮播效果
var num;
$(".tongRen_tabs li[class!='blank']").mouseenter(function(){
    num=$(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".tongRen_content").css("left",-num*1220+"px")
});
//数据引入
$.ajax({
    url:"json/tongren.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        //console.log(data.tongren[0].recommend[data.tongren[0].recommend.length-1].word)
        for(var a=0;a<data.tongren[0].recommend.length;a=a+1){
            $(".tongRen_content ul:eq(0) li:eq("+a+") a img").attr("src",data.tongren[0].recommend[a].src);
            $(".tongRen_content ul:eq(0) li:eq("+a+") p .tongRen_content_info").text(data.tongren[0].recommend[a].word)
        }
        for(var b=0;b<data.tongren[0].draw.length;b=b+1){
            $(".tongRen_content ul:eq(1) li:eq("+b+") a img").attr("src",data.tongren[0].draw[b].src);
            $(".tongRen_content ul:eq(1) li:eq("+b+") p .tongRen_content_info").text(data.tongren[0].draw[b].word)
        }
        for(var c=0;c<data.tongren[0].COS.length;c=c+1){
            $(".tongRen_content ul:eq(2) li:eq("+c+") a img").attr("src",data.tongren[0].COS[c].src);
            $(".tongRen_content ul:eq(2) li:eq("+c+") p .tongRen_content_info").text(data.tongren[0].COS[c].word)
        }
        for(var d=0;d<data.tongren[0].video.length;d=d+1){
            $(".tongRen_content ul:eq(3) li:eq("+d+") a img").attr("src",data.tongren[0].video[d].src);
            $(".tongRen_content ul:eq(3) li:eq("+d+") p .tongRen_content_info").text(data.tongren[0].video[d].word)
        }
        for(var e=0;e<data.tongren[0].novel.length;e=e+1){
            $(".tongRen_content ul:eq(4) li:eq("+e+") a img").attr("src",data.tongren[0].novel[e].src);
            $(".tongRen_content ul:eq(4) li:eq("+e+") p .tongRen_content_info").text(data.tongren[0].novel[e].word)
        }
        for(var f=0;f<data.tongren[0].highPlayer.length;f=f+1){
            $(".tongRen_content ul:eq(5) li:eq("+f+") a img").attr("src",data.tongren[0].highPlayer[f].src);
            $(".tongRen_content ul:eq(5) li:eq("+f+") p .tongRen_content_info").text(data.tongren[0].highPlayer[f].word)
        }

    }
})