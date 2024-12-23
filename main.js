function CriaCartao (categoria, pergunta, resposta){
    let containeres = document.getElementById('containeres');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div class="pergunta-cartao">
        <p>${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
</div>
      `

    let respostaEstaVisivel = false;

    function viraCartao (){
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

cartao.addEventListener('click', viraCartao)

      containeres.appendChild(cartao);
}