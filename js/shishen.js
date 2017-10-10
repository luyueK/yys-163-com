$.ajax({
    url:"json/SS.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        var ulNum;
        //动态数据引入
        var all = [],ssr = [],sr = [], r = [],n = [];
        ssr.push(data.SS[0].SSR);
        sr.push(data.SS[0].SR);
        r.push(data.SS[0].R);
        n.push(data.SS[0].N);
        all= ssr[0].concat(sr[0],r[0],n[0]);
        //将四部分组成一个整体用来显示“全部”内容
        var current=all;
        //创建ul
        function creatUl(){
            ulNum=Math.ceil(0.5*(current.length));
            var obj = '<ul></ul>'
            for(var ss= 0;ss<ulNum;ss=ss+1){
            $('#SS-icon_list').append('<ul></ul>')
            }
        }
        //初始值
        creatUl()
        //四个选项添加点击事件
        $('.SSContainer_menu').children('span').click(function(){
            $('.SS-icon_list').empty();
           if($(this).attr("is")=="ssr"){
               //current为后面将被处理的数组，根据点击的对象来决定Jason里的元素填入到current中
               current=ssr[0];
               creatUl()

           }
            if($(this).attr("is")=="sr"){
                current=sr[0];

                creatUl()
            }
            if($(this).attr("is")=="r"){
                current=r[0];

                creatUl()
            }
            if($(this).attr("is")=="n"){
                current=n[0];
                creatUl();console.log(ulNum)
            }
            if($(this).attr("is")=="all"){
                current=all;
                creatUl()
            }
            changeShishen();
            //初始箭头显示隐藏
            boxNum = Math.ceil(ulNum/6);
            $(".SS-icon_list").css("left",0);
            $(".SS-rightArrow").show();
            $(".SS-leftArrow").hide();

        });
        changeShishen();
        //对ul内追加Jason数据
        function changeShishen(){
            $.each(current,function(index,item){
                var objInner = '<li><a class="SS-icon"><span><em>'+item.name+'</em></span><img src="'+item.src+'"></a></li>';
                $('.SS-icon_list').children('ul').eq(parseInt(index/2)).append(objInner);
            });
        }
        var boxNum = Math.ceil(all.length/12);
        var boxImgLeft=parseInt($(".SS-icon_list").css("left"));
        var numSS=0;
        $(".SS-icon_list").css("width",138*ulNum);
        //轮播图
        $(".SS-rightArrow").on("click",right);
        $(".SS-leftArrow").on("click",left);
        function numAndLeft(){
            boxImgLeft=-numSS*828;
            $(".SS-icon_list").animate({left:boxImgLeft+"px"},500)

        }
        function right() {
            if (numSS < boxNum - 1) {
                numSS = numSS + 1;
                numAndLeft();
            }
            if (numSS == boxNum - 1) {
                $(".SS-rightArrow").fadeOut(500)
            }
            if (numSS > 0) {
                $(".SS-leftArrow").fadeIn(500);
            }
        }
        function left(){
            if (numSS > 0) {
                numSS = numSS - 1;
                numAndLeft();
            }
            if (numSS == 0) {
                $(".SS-leftArrow").fadeOut(500);
            }
            if(numSS < boxNum - 1){
                $(".SS-rightArrow").fadeIn(500)
            }
        }
    }
});
