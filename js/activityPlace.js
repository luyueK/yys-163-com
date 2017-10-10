//活动专区数据引入
$.ajax({
    url:"json/activityPlace.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        for(var i=0;i<data.activityPlace.length;i=i+1){
            $(".activityContent li:eq("+i+") a img").attr("src",data.activityPlace[i].src);
            $(".activityContent li:eq("+i+") a span").text(data.activityPlace[i].info)
        }

    }
})
