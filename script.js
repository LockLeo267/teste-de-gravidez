function abrirnavbar() {
    var responsividade = document.getElementById("respo");
    var displayAtual = window.getComputedStyle(responsividade).display;

    if (displayAtual === "none") {
        responsividade.style.display = "flex";
    }
}

function fecharnavbar() {
    var responsividade = document.getElementById("respo");
    var displayAtual = window.getComputedStyle(responsividade).display;

    if (displayAtual === "flex") {
        responsividade.style.display = "none";
    }
}


window.addEventListener('resize', function() {
    var responsividade = document.getElementById("respo");
    if (window.innerWidth > 500) {
        responsividade.style.display = "none";
    }
});
