//封面人物
var num;
$(".arrow").click(function(){
    if(num===1){
        changeRole2()
    }
    else{
        changeRole()
    }
});

function changeRole(){
    num=1;
    $("#role1X").attr("id",'role1');
    $("#role2X").attr("id",'role2');
    $("#role1").animate({
        left: 270+"px",
        opacity: 0
    },1000);
    $("#role2").animate({
        left: 150+"px",
        opacity: 0
    },1000,function(){
        $(".role:eq(0)").css("display","none");
        $(".role:eq(1)").css("display","block");
        $("#role3").attr("id",'role3X');
        $("#role4").attr("id",'role4X');
    });
    setTimeout(function(){
        $("#role3X").animate({
            left: 160+"px",
            opacity: 1
        },1000);
        $("#role4X").animate({
            left: 366+"px",
            opacity: 1
        },1000);
    },1100);
}
function changeRole2() {
    num=0;
    $("#role3X").attr("id",'role3');
    $("#role4X").attr("id",'role4');
    $("#role3").animate({
        left: 270 + "px",
        opacity: 0
    }, 1000);
    $("#role4").animate({
        left: 150 + "px",
        opacity: 0
    }, 1000,function(){
        $(".role:eq(1)").css("display","none");
        $(".role:eq(0)").css("display","block");
        $("#role1").attr("id",'role1X');
        $("#role2").attr("id",'role2X');
    });
    setTimeout(function(){
        $("#role1X").animate({
            left: 160+"px",
            opacity: 1
        },1000);
        $("#role2X").animate({
            left: 366+"px",
            opacity: 1
        },1000);
    },1100);
}
