//网易游戏全目录下拉菜单显示消失
$(".topBar_content_gameCatalogue").mouseenter(function(){
    $(".gameCatalogue").fadeIn(500)
});
$(".gameCatalogue").mouseleave(function(){
    $(this).fadeOut(500)
});
//游戏目录
$.ajax({
        url: "json/gameCatalogue.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            //角色扮演
            for (var i = 0; i < data.PCgame1.length; i = i + 1) {
                $("<a></a>").appendTo($(".PCgame1"));
            }
            $("<em></em>").appendTo($(".PCgame1 a"));
            for (var j = 0; j < data.PCgame1.length; j = j + 1) {
                $(".PCgame1 a:eq(" + j + ") em").text(data.PCgame1[j].gameName);
                $(".PCgame1 a:eq(" + j + ") em").css("background", data.PCgame1[j].bg);
                $(".PCgame1 a:eq(" + j + ")").attr("href", data.PCgame1[j].href)
            };
            //竞技休闲
            for (var k = 0; k < data.PCgame2.length; k = k + 1) {
                $("<a></a>").insertAfter($(".PCgame2 p"));
            }
            $("<em></em>").appendTo($(".PCgame2 a"));
            for (var l = 0; l < data.PCgame2.length; l = l + 1) {
                $(".PCgame2 a:eq(" + l + ") em").text(data.PCgame2[l].gameName);
                $(".PCgame2 a:eq(" + l + ") em").css("background", data.PCgame2[l].bg);
                $(".PCgame2 a:eq(" + l + ")").attr("href", data.PCgame2[l].href)
            }
            //热门推荐
            for (var m = 0; m < data.mobileGame1.length; m = m + 1) {
                $("<a></a>").insertAfter($(".mobileGame1 p"));
            }
            $("<em></em>").appendTo($(".mobileGame1 a"));
            for (var n = 0; n < data.mobileGame1.length; n = n + 1) {
                $(".mobileGame1 a:eq(" + n + ") em").text(data.mobileGame1[n].gameName);
                $(".mobileGame1 a:eq(" + n + ") em").css("background", data.mobileGame1[n].bg);
                $(".mobileGame1 a:eq(" + n + ")").attr("href", data.mobileGame1[n].href)
            }
            ///新品推荐
            var num = data.mobileGame2.length;
            if(num<=16){
                //当数据小于16个的时候
                 list1()
            }
            else if(num>16&&num<=32){
                //当数据小于32个大于16的时候
                list1();
                list2();
            }
            else if(num>32&&num<=48){
                list1();
                list2();
                list3();
            }
            else if(num>48&&num<=64){
                list1();
                list2();
                list3();
                list4()
            }
            function list1(){
                $("<div class='mobileGame2_news_list1'></div>").appendTo($(".mobileGame2_news"));
                for (var a1 = 0; a1 < Math.min(data.mobileGame2.length,16); a1 = a1 + 1) {
                    $("<a></a>").appendTo($(".mobileGame2_news_list1"));
                }
                $("<em></em>").appendTo($(".mobileGame2_news_list1 a"));
                for (var a2 = 0; a2 < Math.min(data.mobileGame2.length,16); a2 = a2 + 1) {
                    $(".mobileGame2_news_list1 a:eq(" + a2 + ") em").text(data.mobileGame2[a2].gameName);
                    $(".mobileGame2_news_list1 a:eq(" + a2 + ") em").css("background", data.mobileGame2[a2].bg);
                    $(".mobileGame2_news_list1 a:eq(" + a2 + ")").attr("href", data.mobileGame2[a2].href)
                }
            }
            function list2(){
                $("<div class='mobileGame2_news_list2'></div>").appendTo($(".mobileGame2_news"));
                for (var b1 = 0; b1 < Math.min(data.mobileGame2.length-16,16); b1 = b1 + 1) {
                    $("<a></a>").appendTo($(".mobileGame2_news_list2"));
                }
                $("<em></em>").appendTo($(".mobileGame2_news_list2 a"));
                for (var b2 = 0; b2 < Math.min(data.mobileGame2.length-16,16); b2 = b2 + 1) {
                    $(".mobileGame2_news_list2 a:eq(" + b2 + ") em").text(data.mobileGame2[b2+16].gameName);
                    $(".mobileGame2_news_list2 a:eq(" + b2 + ") em").css("background", data.mobileGame2[b2+16].bg);
                    $(".mobileGame2_news_list2 a:eq(" + b2 + ")").attr("href", data.mobileGame2[b2+16].href)
                }
            }
            function list3(){
                $("<div class='mobileGame2_news_list3'></div>").appendTo($(".mobileGame2_news"));
                for (var c1 = 0; c1 < Math.min(data.mobileGame2.length-32,16); c1 = c1 + 1) {
                    $("<a></a>").appendTo($(".mobileGame2_news_list3"));
                }
                $("<em></em>").appendTo($(".mobileGame2_news_list3 a"));
                for (var c2 = 0; c2 < Math.min(data.mobileGame2.length-32,16); c2 = c2 + 1) {
                    $(".mobileGame2_news_list3 a:eq(" + c2 + ") em").text(data.mobileGame2[c2+32].gameName);
                    $(".mobileGame2_news_list3 a:eq(" + c2 + ") em").css("background", data.mobileGame2[c2+32].bg);
                    $(".mobileGame2_news_list3 a:eq(" + c2 + ")").attr("href", data.mobileGame2[c2+32].href)
                }
            }
            function list4(){
                $("<div class='mobileGame2_news_list4'></div>").appendTo($(".mobileGame2_news"));
                for (var d1 = 0; d1 < Math.min(data.mobileGame2.length-48,16); d1 = d1 + 1) {
                    $("<a></a>").appendTo($(".mobileGame2_news_list4"));
                }
                $("<em></em>").appendTo($(".mobileGame2_news_list4 a"));
                for (var d2 = 0; d2 < Math.min(data.mobileGame2.length-48,16); d2 = d2 + 1) {
                    $(".mobileGame2_news_list4 a:eq(" + d2 + ") em").text(data.mobileGame2[d2+48].gameName);
                    $(".mobileGame2_news_list4 a:eq(" + d2 + ") em").css("background", data.mobileGame2[d2+48].bg);
                    $(".mobileGame2_news_list4 a:eq(" + d2 + ")").attr("href", data.mobileGame2[d2+48].href)
                }
            }
            //游戏辅助
            for (var o = 0; o < data.gameAccessories1.length; o = o + 1) {
                $("<a></a>").insertAfter($(".gameAccessories1 p"));
            }
            $("<em></em>").appendTo($(".gameAccessories1 a"));
            for (var p = 0; p < data.gameAccessories1.length; p = p + 1) {
                $(".gameAccessories1 a:eq(" + p + ") em").text(data.gameAccessories1[p].gameName);
                $(".gameAccessories1 a:eq(" + p + ") em").css("background", data.gameAccessories1[p].bg);
                $(".gameAccessories1 a:eq(" + p + ")").attr("href", data.gameAccessories1[p].href)
            }
        }
    }
);