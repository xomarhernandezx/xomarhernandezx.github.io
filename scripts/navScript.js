$(document).ready(function () {
  $("#logoButton").click(function (e) {
    let navDesk = document.getElementById("navDesk");
    let navMov = document.getElementById("navMov");

    navDesk.style.display = (navDesk.dataset.toggled ^= 1) ? "grid" : "none";
    navMov.style.display = (navMov.dataset.toggled ^= 1) ? "grid" : "none";

    setTimeout(transicion, 100);
    

    function transicion (){
    $("section").toggleClass("filterBlur");
    $("footer").toggleClass("filterBlur");
    $("#logoButton").toggleClass("rotate");

    console.log(navDesk.style.display);
    console.log(navDesk.dataset.toggled);
    console.log(navDesk.dataset.toggled ^= 0);
    console.log("Hola");

    $("#navDesk").toggleClass("navDeskBack");
    $("#aboutDesk").toggleClass("translateLR");
    $("#contactDesk").toggleClass("translateBT");
    $("#projectsDesk").toggleClass("translateTB");
    $("#footerDesk").toggleClass("translateRL");
    // Sección de escritorio

    $("#navMov").toggleClass("navMovBack");
    $("#aboutMov").toggleClass("translateTB");
    $("#contactMov").toggleClass("translateRL");
    $("#projectsMov").toggleClass("translateLR");
    $("#footerMov").toggleClass("translateBT");
    // Sección de movil
    }
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
  setTimeout(dirA, 1000);
});
/* Se redirecciona a ruta project.html */
$("#projectsDesk").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirP, 1000);
});
/* Se redirecciona a ruta contact.html */
$("#contactDesk").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirC, 1000);
});

/* Movil */

/* Se redirecciona a ruta about.html */
$("#aboutMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirA, 1000);
});
/* Se redirecciona a ruta project.html */
$("#projectsMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirP, 1000);
});
/* Se redirecciona a ruta contact.html */
$("#contactMov").click(function (e) {
  $("#preloader").css("display", "grid");
  setTimeout(dirC, 1000);
});
