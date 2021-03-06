const pos_nav = document.documentElement;
const pos_mov = document.documentElement;

pos_nav.addEventListener("mousemove", function (e) {
  pos_nav.style.setProperty("--x", e.clientX + "px");
  pos_nav.style.setProperty("--y", e.clientY + "px");
  /*Variables incrustadas en el documento*/
});

pos_mov.addEventListener("touchmove", function (e) {
  pos_mov.style.setProperty("--x", e.touches[0].pageX + "px");
  pos_mov.style.setProperty("--y", e.touches[0].pageY + "px");
  /*Variables incrustadas en el documento*/
});

$(document).ready(function () {
  $(document).mousemove(function (e) {
    $("#back").css({
      "-webkit-clipPath": "circle(100px at var(--x) var(--y))",
      background: "url(./imagen/paredInicio.jpg)"
    });
    $("#focus").css(
      "boxShadow",
      "0 0 3px var(--claro), 0 0 6px var(--claro), 0 0 9px var(--claro)"
    );
    /* Se agregan estilos CSS al ingresar al documento */
  });
});

$(document).ready(function () {
  $(document).on("touchstart", function () {
    $("#back").css({
      "-webkit-clipPath": "circle(100px at var(--x) var(--y))",
      background: "url(./imagen/pared.jpg)",
    });
    $("#focus").css(
      "boxShadow",
      "0 0 3px var(--claro), 0 0 6px var(--claro), 0 0 9px var(--claro)"
    );
    /* Se agregan estilos CSS al ingresar al documento */
  });
});

$(document).ready(function () {
  $(document).mouseleave(function (e) {
    $("#back").css({"-webkit-clipPath": "",background: "",});
    $("#focus").css("boxShadow", "");
    /* Se cambian estilos CSS al salir del documento */
  });
});

$(document).ready(function () {
  $(document).on("touchend", function () {
    $("#back").css({ "-webkit-clipPath": "", background: "" });
    $("#focus").css("boxShadow", "");
    /* Se cambian estilos CSS al salir del documento */
  });
});

$(document).ready(function () {
  $("#logoButton").click(function (e) {
    $("#back").toggle();
    $("#focus").toggle();
    $("#particles-js").toggle();
  });
});
