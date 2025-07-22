let itens = [{
    src:"assets/imagem/img1.jpg",
    titulo:"Café expresso",
    discricao:"feito com os melhores grãos de café",
    preco:"R$ 10",
    id:1
}, {
    src:"assets/imagem/embalagem1.avif",
    titulo:"café alto da serra",
    discricao:"café alto da serra",
    preco:"R$ 50",
    id:2
}, {
    src:"assets/imagem/bolocaseiro.jpg",
    titulo:"Bolo da vovó",
    discricao:"Bolo da vovó feito com carinho e amor",
    preco:"R$ 5",
    id:3
}]

let getCartao = (item) => {
    return `<div class="col">
            <div class="card" style="width: 20rem;">
                <img src="${item.src}" width="400px" height="250px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.titulo}</h5>
                <p class="card-text">${item.discricao}</p>
                <a href="#"  data-id="${item.id}" class="btn btn-primary" >${item.preco}</a>
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



/*const botaoCart = document.querySelector(".carrinhoClass")

botaoCart.addEventListener("click",()=>{
    const cart = document.querySelector(".carrinho")

    if(cart.style.display = "none"){
        cart.style.display = "flex"

    }else if(cart.style.display = "flex"){
        cart.style.display = "none"
    }
})

const carrinhoCorpo = document.querySelector(".carrinhoCorpo")
const botao = document.querySelectorAll(".btn")



botao.forEach((e)=>{
    e.addEventListener("click",()=>{
        let id = e.dataset.value
        const item = itens.find(obj => obj.id === id)
        const novaDiv = document.createElement("div")
        novaDiv.classList.add("cart-item")
        novaDiv.innerHTML = `
        <img src="https://via.placeholder.com/80" alt="Produto" />
        
        <div class="item-details">
        <h3>Nome do Produto</h3>
        <p>Preço: R$ 89,90</p>
    </div>

    <div class="item-actions">
    <input type="number" class="quantity" value="1" min="1" />
    <button class="remove-btn">Remover</button>
    </div>
    </div>
    `
    carrinhoCorpo.appendChild(novaDiv)
        
    })
})
*/