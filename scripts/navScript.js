$(document).ready(function () {
  $("#logoButton").click(function (e) { 
    $("#logoButton").toggleClass("rotate");
    $("#aboutMov").toggleClass("translateTB");
    $("#contactMov").toggleClass("translateRL");
    $("#projectsMov").toggleClass("translateLR");
    $("#footerMov").toggleClass("translateBT");
    $("#navMov").toggleClass("navMovBack");
    $("#navDesk").toggleClass("navDeskBack");
    $("#aboutDesk").toggleClass("translateLR");
    $("#contactDesk").toggleClass("translateBT");
    $("#projectsDesk").toggleClass("translateTB");
    $("#footerDesk").toggleClass("translateRL");
    $("section").toggleClass("filterBlur");
    $("footer").toggleClass("filterBlur");
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
  $("#preloader").css("display", "grid");
  setTimeout(dirA,1000);
});
/* Se redirecciona a ruta project.html */
$("#projectsDesk").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirP,1000);
});
/* Se redirecciona a ruta contact.html */
$("#contactDesk").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirC,1000);
});

/* Movil */

/* Se redirecciona a ruta about.html */
$("#aboutMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirA,1000);
});
/* Se redirecciona a ruta project.html */
$("#projectsMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirP,1000);
});
/* Se redirecciona a ruta contact.html */
$("#contactMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirC,1000);
});