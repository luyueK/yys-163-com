//左侧轮播图片数据
$.ajax({
    url:"json/strategy.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        for(var i=0;i<data.banner1.length;i=i+1)
        $(".banner1Img ul li:eq("+i+") img").attr("src",data.banner1[i].src)
    }

});
//轮播图效果
var num;
$(".banner1Point span").mouseenter(function(){
    num=$(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".banner1Img ul").css("left",-num*368+"px");

});
//右侧轮播
var k;
$(".banner2TabBox a").mouseenter(function(){
    $(this).addClass("choose").siblings().removeClass("choose");
    k=($(this).index())/2;
    //console.log(k)
    $(".banner2Content").css("left",-k*830+"px")
});
//新闻数据引入
$.ajax({
    url:"json/strategy.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        for(var j=0;j<data.banner2[0].strategy.length;j=j+1){
            $(".banner2Content ul:eq(0) li:eq("+j+") a p span").text(data.banner2[0].strategy[j].content);
            $(".banner2Content ul:eq(0) li:eq("+j+") a em").text(data.banner2[0].strategy[j].writer)
        }
        for(var k=0;k<data.banner2[0].newPlayer.length;k=k+1){
            $(".banner2Content ul:eq(1) li:eq("+k+") a p span").text(data.banner2[0].newPlayer[k].content);
            $(".banner2Content ul:eq(1) li:eq("+k+") a em").text(data.banner2[0].newPlayer[k].writer)
        }
        for(var l=0;l<data.banner2[0].SS.length;l=l+1){
            $(".banner2Content ul:eq(2) li:eq("+l+") a p span").text(data.banner2[0].SS[l].content);
            $(".banner2Content ul:eq(2) li:eq("+l+") a em").text(data.banner2[0].SS[l].writer)
        }
        for(var m=0;m<data.banner2[0].fight.length;m=m+1){
            $(".banner2Content ul:eq(3) li:eq("+m+") a p span").text(data.banner2[0].fight[m].content);
            $(".banner2Content ul:eq(3) li:eq("+m+") a em").text(data.banner2[0].fight[m].writer)
        }
        for(var n=0;n<data.banner2[0].ways.length;n=n+1){
            $(".banner2Content ul:eq(4) li:eq("+n+") a p span").text(data.banner2[0].ways[n].content);
            $(".banner2Content ul:eq(4) li:eq("+n+") a em").text(data.banner2[0].ways[n].writer)
        }

}
});