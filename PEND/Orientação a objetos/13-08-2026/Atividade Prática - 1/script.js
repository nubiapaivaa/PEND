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
        const precoFinal = this.aplicarDesconto();

        return `
            <div class="produto">
                <h2>${this.nome}</h2>

                <p><strong>Categoria:</strong> ${this.categoria}</p>

                <p><strong>Preço original:</strong>
                    R$ ${this.preco.toFixed(2)}
                </p>

                <p><strong>Desconto:</strong>
                    ${this.desconto}%
                </p>

                <p class="preco">
                    Preço com desconto: R$ ${precoFinal.toFixed(2)}
                </p>
            </div>
        `;
    }
}


const formulario = document.getElementById("formProduto");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = parseFloat(document.getElementById("desconto").value);

    const produto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );

    resultado.innerHTML = produto.exibir();

    formulario.reset();
});