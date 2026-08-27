class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibir(index) {
        return `
            <div>
                <h3>${this.nome}</h3>
                <p>Categoria: ${this.categoria}</p>
                <p>Preço original: R$ ${this.preco.toFixed(2)}</p>
                <p>Desconto: ${this.desconto}%</p>
                <p>Preço com desconto: R$ ${this.aplicarDesconto().toFixed(2)}</p>

                <button onclick="excluirProduto(${index})">
                    Excluir
                </button>

                <hr>
            </div>
        `;
    }
}


// Recupera os produtos salvos no LocalStorage
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];


// Seleciona os elementos do HTML
const botao = document.getElementById("cadastrar");
const listaProdutos = document.getElementById("listaProdutos");


// Função para exibir os produtos
function exibirProdutos() {

    listaProdutos.innerHTML = "";

    produtos.forEach(function(produto, index) {

        const produtoObjeto = new Produto(
            produto.nome,
            Number(produto.preco),
            produto.categoria,
            Number(produto.desconto)
        );

        listaProdutos.innerHTML += produtoObjeto.exibir(index);
    });
}


// Evento do botão Cadastrar
botao.addEventListener("click", function() {

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);


    // Cria um novo produto
    const novoProduto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );


    // Adiciona o produto ao array
    produtos.push(novoProduto);


    // Salva os produtos no LocalStorage
    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );


    // Atualiza a lista de produtos
    exibirProdutos();


    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("desconto").value = "";
});


// Função para excluir um produto
function excluirProduto(index) {

    // Remove o produto do array
    produtos.splice(index, 1);


    // Atualiza o LocalStorage
    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );


    // Atualiza a lista na tela
    exibirProdutos();
}


// Exibe os produtos automaticamente
// quando a página é aberta
exibirProdutos();