/**
 * Created by rainbow on 2016/3/28 11:33.
 * Knowledge is power.
 */
$(document).ready(function(){
  // alert("文档已经加载完毕");
    $("p").click(function(){
        console.log("开始调用隐藏方法");
       $(this).hide();
    });
});
