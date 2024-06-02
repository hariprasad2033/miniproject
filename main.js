const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var count = 0;

$(".dropdown dt").click(function(){
    $(this).next(".dropdown_content").toggle("slow");
});

if (isMobile) {
    $("menu .details a").click(function(){
        if ($(this).index() == 0){
            $(this).attr("href", "tel:1234567890");
        }
        if ($(this).index() == 3){
            popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
        }
    });
} else {
    $("menu .details a").click(function(){
        switch($(this).index()){
            case 0:
                return popup('<i class="fa fa-times"></i></a><iconify-icon icon="subway:error" class="error"></iconify-icon><aside><h3 class="title small">Unsupported device</h3><p>It looks like your device won\'t support for <b>calling</b>. Kindly use a Mobile device.</p></aside>', 'alert');
                break;
            case 3:
                 popup('<i class="fa fa-times"></i></a><iconify-icon icon="bx:error"></iconify-icon><aside><h3 class="title small">Timings may vary</h3><p>For accurate timings please connect through a call & confirm.</p></aside>', 'alert');
                break;
            default:
                break;
        }
    });
}

function popup(mssg, type){
    if(type == "alert"){
        if ($(".alert").length < 2){
            count++;
            $(".additional").append('<section class="alert alert_'+count+' flex padding_1x"><a href="javascript:void(0)" onclick="closer(\'modal\',\'alert_'+count+'\')" class="close">'+mssg+'</section>');
            setTimeout(function(){$(".alert_"+count).remove();}, 10000);
            if ($(".alert").length > 0){ setTimeout(function(){$(".alert_"+count).prev().remove();}, 4000); }
        }
    }
}

$(".ham").click(function(){
    if ($("menu").css("left") != "0px"){
        $(this).addClass(" hamburger");
        $("body").append('<div class="overlay" onclick="closer()"></div>');
        $("menu").css("left","0px");
        $("body").css({'overflow-y':'hidden'});
    }
});


$(".close").click(function(){
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
});
function closer(type, el){
        if(type=="modal"){
        $("."+el).remove();
        return 1;
        }
    $(".overlay").remove();
    if ($("menu").css("left") >= "0px"){
        $(".ham").removeClass(" hamburger");
        $("menu").css("left","-105%");
        $("body").css({'overflow-y':'visible'});
    }
}

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--dark)") ;
        document.getElementById("roll_back").style.display = "flex";
    } else {
        $("nav").css("background-color","transparent") ;
        document.getElementById("roll_back").style.display = "none";
    }
}