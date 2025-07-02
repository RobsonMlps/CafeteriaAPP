let itens = [{
    src:"assets/imagem/img1.jpg",
    titulo:"Card title",
    discricao:"Some quick example text to build on the card title and make up the bulk of the card’s content",
    preco:"R$ 20",
}, {
    src:"assets/imagem/embalagem1.avif",
    titulo:"café alto da serra",
    discricao:"café alto da serra",
    preco:"R$ 50",
}, {
    src:"assets/imagem/embalagem2.avif",
    titulo:"Café exrpesso",
    discricao:"Café expresso istreito",
    preco:"R$ 10",
}]

let getCartao = (item) => {
    return `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${item.src}" width="50%" height="30%" class="card-img-top" alt="...">
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