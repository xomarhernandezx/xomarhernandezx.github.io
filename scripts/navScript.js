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