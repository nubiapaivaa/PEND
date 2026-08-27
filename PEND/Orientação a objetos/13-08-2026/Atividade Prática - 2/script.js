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

    exibir() {
        return `
            <div>
                <h3>${this.nome}</h3>
                <p>Categoria: ${this.categoria}</p>
                <p>Preço original: R$ ${this.preco.toFixed(2)}</p>
                <p>Desconto: ${this.desconto}%</p>
                <p>Preço com desconto: R$ ${this.aplicarDesconto().toFixed(2)}</p>
                <hr>
            </div>
        `;
    }
}

let produtos = [];

const botao = document.getElementById("cadastrar");
const listaProdutos = document.getElementById("listaProdutos");

botao.addEventListener("click", function() {

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);

    const novoProduto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );

    produtos.push(novoProduto);

    listaProdutos.innerHTML = "";

    produtos.forEach(function(produto) {
        listaProdutos.innerHTML += produto.exibir();
    });

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("desconto").value = "";
});