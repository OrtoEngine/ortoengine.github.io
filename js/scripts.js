document.addEventListener("DOMContentLoaded", function () {

    const btnMissao = document.getElementById("btnMissao");
    const btnSolucoes = document.getElementById("btnSolucoes");

    const textoMissao = document.getElementById("textoMissao");
    const textoSolucoes = document.getElementById("textoSolucoes");

    // Botão Missão
    btnMissao.addEventListener("click", () => {
        textoMissao.style.display = 
            textoMissao.style.display === "none" ? "block" : "none";

        // Oculta o outro texto
        textoSolucoes.style.display = "none";
    });

    // Botão Soluções
    btnSolucoes.addEventListener("click", () => {
        textoSolucoes.style.display = 
            textoSolucoes.style.display === "none" ? "block" : "none";

        // Oculta o outro texto
        textoMissao.style.display = "none";
    });

});
