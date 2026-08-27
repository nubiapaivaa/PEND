class produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    vender() {
        console.log("Produto vendido.");
    }

    repor() {
        console.log("Produto reposto.");
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log("Preço alterado para: " + this.preco);
    }
}

const produto1 = new produto("Camiseta", 49.90, 100);

const produto2 = new produto("Calça Jeans", 99.90, 50);

const produto3 = new produto("Tênis", 149.90, 30); 

produto1.vender();
produto2.repor();
produto3.alterarPreco(129.90);

console.log("Produto 1: ", produto1);
console.log("Produto 2: ", produto2);
console.log("Produto 3: ", produto3);


