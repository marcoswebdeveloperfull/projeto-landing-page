const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {

    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function() {

    const totalDeImagens = imagens.length -1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();  
});

setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem(); 
});