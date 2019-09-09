function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInLeft");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutLeft");
        $("#projects_container").css("display","none");
    },800);
}
function showresearch(){
    $("#research_container").css("display","inherit");
    $("#research_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#research_container").removeClass("animated slideInRight");
    },800);
}
function closeresearch(){
    $("#research_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#research_container").removeClass("animated slideOutRight");
        $("#research_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
function showskills(){
    $("#skills_container").css("display","inherit");
    $("#skills_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#skills_container").removeClass("animated slideInLeft");
    },800);
}
function closeskills(){
    $("#skills_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#skills_container").removeClass("animated slideOutLeft");
        $("#skills_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#projects").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#skills").removeClass("animated fadeIn");
      $("#research").removeClass("animated fadeIn");
    },1000);
},1500);
