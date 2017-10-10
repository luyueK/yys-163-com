/**
 * Created by 12618 on 2017/8/30.
 */
var arr=["安卓充值9.8折","领取网易严选宝箱"];
var numA=1;
var obj=$(".scrollMenu a");
obj.text(arr[0]);
function roll(){
    function step1(){
        obj.attr("class","fadeUp");
        setTimeout(step2,500)
    }
    function step2(){
        obj.text(arr[numA]);
        obj.attr("class","none");
        if (numA === 1) {
            numA = 0;
        } else {
            numA = 1;
        }
        setTimeout(step3,500);
    }
    function step3(){
        obj.attr("class","fadeUp2");
        setTimeout(step1,2000)
    }
    setTimeout(step1, 2000)
}
roll();



