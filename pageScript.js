const pos_nav = document.documentElement;
const pos_mov = document.documentElement;

pos_nav.addEventListener("mousemove", function(e){
  pos_nav.style.setProperty("--x", e.clientX + "px");
  pos_nav.style.setProperty("--y", e.clientY + "px");
  /*Variables incrustadas en el documento*/
});

pos_mov.addEventListener("touchmove", function(e){
  pos_mov.style.setProperty("--x", e.touches[0].pageX + "px");
  pos_mov.style.setProperty("--y", e.touches[0].pageY + "px");
  /*Variables incrustadas en el documento*/
});

$(document).ready(function () {
  $(document).mousemove(function (e) { 
    $("#back").css("-webkit-clipPath", "circle(100px at var(--x) var(--y))");
    $("#back").css("background", "var(--obscuro)");
    $("#focus").css("boxShadow", "0 0 3px var(--claro), 0 0 6px var(--claro), 0 0 9px var(--claro)");
    /* Se agregan estilos CSS al ingresar al documento */
  });
});
$(document).ready(function () {
  $(document).on("touchstart", function () {
    $("#back").css("-webkit-clipPath", "circle(100px at var(--x) var(--y))");
    $("#back").css("background", "var(--obscuro)");
    $("#focus").css("boxShadow", "0 0 3px var(--claro), 0 0 6px var(--claro), 0 0 9px var(--claro)");
    /* Se agregan estilos CSS al ingresar al documento */
  });
});

$(document).ready(function () {
  $(document).mouseleave(function (e) { 
    $("#back").css("-webkit-clipPath", "");
    $("#back").css("background", "");
    $("#focus").css("boxShadow", "");
    /* Se cambian estilos CSS al salir del documento */
  });
});

$(document).ready(function () {
  $(document).on("touchend", function () {
    $("#back").css("-webkit-clipPath", "");
    $("#back").css("background", "");
    $("#focus").css("boxShadow", "");
    /* Se cambian estilos CSS al salir del documento */
  });
});

$(document).ready(function () {
  $("#logoButton").click(function (e) { 
    $("#logoButton").toggleClass("rotate");
    $("#navMov").toggleClass("translate");
    $("#aboutDesk").toggleClass("translateA");
    $("#footerDesk").toggleClass("translateF");
    $("#projectsDesk").toggleClass("translatePCT");
    $("#tipsDesk").toggleClass("translatePCT");
    $("#contactDesk").toggleClass("translatePCT");
    $("#back").toggle(
      function () {
        $("#back").css("-webkit-clipPath", "");
    },
    function () {
      $("back").css("background", "");
    });
    $("#focus").toggle(
      function(){
      $("#focus").css("border", "0");
    });
    $("#particles-js").toggle(function(){
      $("#particles-js").css("zindex", "-3");
    });
  });
});