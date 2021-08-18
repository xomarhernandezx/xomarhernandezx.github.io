$(document).ready(function () {
  $("#logoButton").click(function (e) { 
    $("#logoButton").toggleClass("rotate");
    $("#navMov").toggleClass("translate");
    $("#navMov").toggleClass("navMovBack");
    $("#navDesk").toggleClass("navDeskBack");
    $("#aboutDesk").toggleClass("translateA");
    $("#contactDesk").toggleClass("translateC");
    $("#projectsDesk").toggleClass("translateP");
    $("#tipsDesk").toggleClass("translateT");
    $("#footerDesk").toggleClass("translateF");
    $("html").toggleClass("overflowHidden");
  });
});
/* Funciones */
function dirA() {
  $(location).attr("href", "about.html");
}
function dirP() {
  $(location).attr("href", "project.html");
}
function dirC() {
  $(location).attr("href", "contact.html");
}

/* Escritorio */

/* Se redirecciona a ruta about.html */
$("#aboutDesk").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirA,3000);
});
/* Se redirecciona a ruta project.html */
$("#projectsDesk").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirP,3000);
});
/* Se redirecciona a ruta contact.html */
$("#contactDesk").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirC,3000);
});

/* Movil */

/* Se redirecciona a ruta about.html */
$("#aboutMov").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirA,3000);
});
/* Se redirecciona a ruta project.html */
$("#projectsMov").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirP,3000);
});
/* Se redirecciona a ruta contact.html */
$("#contactMov").click(function (e) {
  $("#loader").css("display", "grid");
  setTimeout(dirC,3000);
});