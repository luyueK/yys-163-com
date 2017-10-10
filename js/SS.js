//弑神
$(".nameSS").click(function(){
    $(".nameSS").addClass("active");
    $(".nameRole").removeClass("active");
    $(".SSContainer").addClass("show");
    $(".RoleContainer").removeClass("show")
});
$(".nameRole").click(function(){
    $(".nameRole").addClass("active");
    $(".nameSS").removeClass("active");
    $(".RoleContainer").addClass("show");
    $(".SSContainer").removeClass("show")
});
var cur=$(".SS-content .SSContainer .SSContainer_menuBox .SSContainer_menu span")
    cur.click(function(){
        //cur.
        $(this).addClass("choose").siblings().removeClass("choose")
});
//主角
$(".RoleContainer a").click(function(){
    console.log($(this).index());
    var num=$(this).index()
    $(this).addClass("RoleContainerChoose").siblings().removeClass("RoleContainerChoose");
    $(".RoleContainer_role:eq("+num+")").addClass("show").siblings().removeClass("show")

})
$.ajax({
    url:"json/SS-role.json",
    type: "GET",
    dataType: "json",
    success:function(data){
        for(var i= 0;i<data.SSRole.length;i=i+1){
            var str=data.SSRole[i].info.split(",").join("<br>");//将json里的逗号转化为折行
            $(".RoleContainer_tabBox a:eq("+i+") span").text(data.SSRole[i].name);
            $(".RoleContainer_role:eq("+i+") img").attr("src",data.SSRole[i].src);
            $(".RoleContainer_role:eq("+i+") .RoleContainer_roleInfo h3").text(data.SSRole[i].name);
            $(".RoleContainer_role:eq("+i+") .RoleContainer_roleInfo p").html(str);


        }
    }
})