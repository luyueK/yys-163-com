//视频\壁纸数据引入
$.ajax({
    url:"json/resource.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        for(var i=0;i<data.resource[0].vedio.length;i=i+1){
            $(".videoBox a:eq("+i+") img").attr("src",data.resource[0].vedio[i].src);
            $(".videoBox a:eq("+i+") p").text(data.resource[0].vedio[i].info)
        }
        for(var j=0;j<data.resource[0].wallpaper.length;j=j+1){
            $(".wallpaper a:eq("+j+") img").attr("src",data.resource[0].wallpaper[j].src);
            $(".wallpaper a:eq("+j+") p").text(data.resource[0].wallpaper[j].info)
        }


    }
})
