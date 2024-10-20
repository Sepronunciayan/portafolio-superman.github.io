function arranca() {
  document.getElementById("superman").style.animationPlayState = "running";
}

function para() {
  document.getElementById("superman").style.animationPlayState = "paused";
}

// -----------------

const element = document.getElementById("superman");
element.addEventListener("click", function () {
  document.getElementById("supermanTexto").innerHTML =
    "Al infinito y mas alla!!!, ah no no que asi no era";
});

// -----------------

function otraPagina() {
  setTimeout(() => {
    window.open("https://es.wikipedia.org/wiki/Superman");
  }, 4000);
}

// ------------------


