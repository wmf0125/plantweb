$(document).ready(function() {
    // initialize with defaults
    $('#cover').fileinput({
        language: 'zh',     //设置语言
        dropZoneEnabled: true,      //是否显示拖拽区域
        dropZoneTitle: "可以将图片拖放到这里",    //拖拽区域显示文字
        uploadUrl: 'imgSave',  //上传路径
        allowedFileExtensions: ['jpg', 'png', 'gif', 'jpeg'],   //指定上传文件类型
        minFileSize: 0,
        maxFileSize: 2048,   //上传文件最大值，单位kb
        uploadAsync: false,  //异步上传
        maxFileCount: 1    //上传文件最大个数。
    }).on("fileuploaded", function(event,data) { //异步上传成功后回调
        console.log(data);		//data为返回的数据
    });
    $("#h1_a").click(function (){
        $("#h1").addClass("active show");
        $("#h2").removeClass("active");
        $("#h3").removeClass("active");
        $("#h4").removeClass("active");
        $("#h5").removeClass("active");
        $("#h6").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h2_a").click(function (){
        $("#h2").addClass("active show");
        $("#h1").removeClass("active");
        $("#h3").removeClass("active");
        $("#h4").removeClass("active");
        $("#h5").removeClass("active");
        $("#h6").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h3_a").click(function (){
        $("#h3").addClass("active show");
        $("#h1").removeClass("active");
        $("#h2").removeClass("active");
        $("#h4").removeClass("active");
        $("#h5").removeClass("active");
        $("#h6").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h4_a").click(function (){
        $("#h4").addClass("active show");
        $("#h1").removeClass("active");
        $("#h2").removeClass("active");
        $("#h3").removeClass("active");
        $("#h5").removeClass("active");
        $("#h6").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h5_a").click(function (){
        $("#h5").addClass("active show");
        $("#h1").removeClass("active");
        $("#h2").removeClass("active");
        $("#h3").removeClass("active");
        $("#h4").removeClass("active");
        $("#h6").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h6_a").click(function (){
        $("#h6").addClass("active show");
        $("#h1").removeClass("active");
        $("#h2").removeClass("active");
        $("#h3").removeClass("active");
        $("#h4").removeClass("active");
        $("#h5").removeClass("active");
        $("#h7").removeClass("active");
    });
    $("#h7_a").click(function (){
        $("#h7").addClass("active show");
        $("#h1").removeClass("active");
        $("#h2").removeClass("active");
        $("#h3").removeClass("active");
        $("#h4").removeClass("active");
        $("#h5").removeClass("active");
        $("#h6").removeClass("active");
    });
});
