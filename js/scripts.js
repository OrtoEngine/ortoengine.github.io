<script>
    const btnMissao = document.getElementById('btnMissao');
    const btnSolucoes = document.getElementById('btnSolucoes');

    const textoMissao = document.getElementById('textoMissao');
    const textoSolucoes = document.getElementById('textoSolucoes');

    function esconderTodos() {
        textoMissao.style.display = 'none';
        textoSolucoes.style.display = 'none';
    }

    // Botão Missão
    btnMissao.addEventListener('click', () => {
        if (textoMissao.style.display === 'none') {
            esconderTodos();
            textoMissao.style.display = 'block';
        } else {
            textoMissao.style.display = 'none';
        }
    });

    // Botão Soluções
    btnSolucoes.addEventListener('click', () => {
        if (textoSolucoes.style.display === 'none') {
            esconderTodos();
            textoSolucoes.style.display = 'block';
        } else {
            textoSolucoes.style.display = 'none';
        }
    });
</script>

