// js/scripts.js
document.addEventListener("DOMContentLoaded", function () {

    // checagem de existência e log para debug
    const btnMissao = document.getElementById("btnMissao");
    const btnSolucoes = document.getElementById("btnSolucoes");
    const textoMissao = document.getElementById("textoMissao");
    const textoSolucoes = document.getElementById("textoSolucoes");
    const botoesArea = document.getElementById("botoes-area");

    console.log("script.js carregado — elementos:", {
        btnMissao: !!btnMissao,
        btnSolucoes: !!btnSolucoes,
        textoMissao: !!textoMissao,
        textoSolucoes: !!textoSolucoes
    });

    if (!btnMissao || !btnSolucoes || !textoMissao || !textoSolucoes) {
        console.warn("Algum elemento necessário não foi encontrado. Verifique IDs no HTML.");
        return;
    }

    // garante que a área dos botões aceita clique (caso algum CSS tenha setado pointer-events)
    if (botoesArea) botoesArea.style.pointerEvents = "auto";

    function mostrarComFade(el) {
        if (!el) return;
        el.style.display = "block";
        // forçar reflow para transição
        void el.offsetWidth;
        el.style.opacity = "1";
    }

    function esconderComFade(el) {
        if (!el) return;
        el.style.opacity = "0";
        setTimeout(() => {
            el.style.display = "none";
        }, 250);
    }

    function toggleMostrar(elMostrar, elEsconder) {
        const isHidden = getComputedStyle(elMostrar).display === "none";
        if (isHidden) {
            // esconder outro primeiro
            esconderComFade(elEsconder);
            // depois mostrar o desejado
            mostrarComFade(elMostrar);
        } else {
            esconderComFade(elMostrar);
        }
    }

    btnMissao.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMostrar(textoMissao, textoSolucoes);
    });

    btnSolucoes.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMostrar(textoSolucoes, textoMissao);
    });

    // DEBUG: se quiser ver se algo bloqueia clique por overlay, deixamos um listener global
    document.addEventListener("click", function (ev) {
        // descomente a linha abaixo para debug de posição de clique
        // console.log("click em", ev.target);
    });
});

