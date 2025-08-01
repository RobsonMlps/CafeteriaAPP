let itemCardapio = JSON.parse(localStorage.getItem("itemCardapio")) || [];


let creatTabela = () => {
    let tabelaDIV = document.getElementById("dados");
    tabelaDIV.innerHTML = "";
    let id = 1;

    let getTabela = (dados) => {
    
    return `<tr>
                <td>${id++}</td>
                <td>${dados.nome}</td>
                <td>${dados.preco}</td>
                <td>${dados.discricao}</td>
            </tr>`
}


    for ( let dados of itemCardapio) {
        
        let tabela = getTabela(dados);
        
        
        tabelaDIV.insertAdjacentHTML("beforeend", tabela);
        // inserindo o cartao no html com o id "cartoes"
    }
}   


const handleSubmit = (event) => {
    event.preventDefault();

    let nomeInput = document.getElementById("item");
    let nome = nomeInput.value; // Remover os parênteses

    let precoInput = document.getElementById("preco");
    let preco = precoInput.value; // Remover os parênteses

    let discricaoinput = document.getElementById("descricao"); 
    let discricao = discricaoinput.value; // Remover os parênteses

    let itemCadastro = { nome: nome, preco: preco, discricao: discricao };
    itemCardapio.push(itemCadastro);

    localStorage.setItem("itemCardapio", JSON.stringify(itemCardapio));

    creatTabela();
    
    Toastify({
        text: "Item cadastrado com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#198754",
        stopOnFocus: true,
    }).showToast();

    document.getElementById("ItemCadastrarForm").reset();
    const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal'));
    modal.hide();
}

let itemCadastrarForm = document.getElementById("ItemCadastrarForm");
itemCadastrarForm.onsubmit = handleSubmit;

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('limparLocalStorageBtn');
        if (btn) {
            btn.addEventListener('click', function() {
                localStorage.clear();
                location.reload();
            });
        }
    });