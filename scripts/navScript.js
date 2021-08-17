$(document).ready(function () {
  $("#logoButton").click(function (e) { 
    $("#logoButton").toggleClass("rotate");
    $("#navMov").toggleClass("translate");
    $("#aboutDesk").toggleClass("translateA");
    $("#contactDesk").toggleClass("translateC");
    $("#projectsDesk").toggleClass("translateP");
    $("#tipsDesk").toggleClass("translateT");
    $("#footerDesk").toggleClass("translateF");
  });
});
/* Se redirecciona a ruta about.html */
$("#aboutDesk").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dir,3000);
});

function dir() {
  $(location).attr("href", "about.html");
}
/* Se redirecciona a ruta project.html */
$("#aboutDesk").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dir,3000);
});

function dir() {
  $(location).attr("href", "about.html");
}