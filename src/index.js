let itens = [{
    src:"assets/imagem/img1.jpg",
    titulo:"Café expresso",
    discricao:"feito com os melhores grãos de café",
    preco:"R$ 10",
}, {
    src:"assets/imagem/embalagem1.avif",
    titulo:"café alto da serra",
    discricao:"café alto da serra",
    preco:"R$ 50",
}, {
    src:"assets/imagem/bolocaseiro.jpg",
    titulo:"Bolo da vovó",
    discricao:"Bolo da vovó feito com carinho e amor",
    preco:"R$ 5",
}]

let getCartao = (item) => {
    return `<div class="col">
            <div class="card" style="width: 20rem;">
                <img src="${item.src}" width="400px" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.titulo}</h5>
                <p class="card-text">${item.discricao}</p>
                <a href="#" class="btn btn-primary">${item.preco}</a>
            </div>
        </div>
    </div>`;
}

let creatcartoes = () => {
    for ( let item of itens) {

        let cartao = getCartao(item);
        let cartoesDIV = document.getElementById("cartoes");
        cartoesDIV.insertAdjacentHTML("beforeend", cartao);
        // inserindo o cartao no html com o id "cartoes"
    }
}   
creatcartoes();