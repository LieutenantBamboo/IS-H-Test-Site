$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(function toggleButtonEffect(evt, effect) {
    var i, content, links;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    links = document.getElementsByClassName("links");
    for (i = 0; i < tablinks.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(effect).style.display = "block";
    evt.currentTarget.className += " active";
});
