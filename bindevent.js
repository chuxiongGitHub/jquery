/**
 * Created by rainbow on 2016/3/28 13:07.
 * Knowledge is power.
 */
$(document).ready(function(){
$("#clickBtn").bind("click",clickME);
    $("#clickBtn").bind("click",clickME2);
});
function clickME(e){
    console.log("clickBtn");
}
function clickME2(e){
    console.log("clickBtn2");
}