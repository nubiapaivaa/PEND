console.log("Mostrando a hora atual");

function mostrarHora() {
    let agora = new Date();
    console.log("Hora atual:", agora);
}

mostrarHora();

console.log("Função que recebe dois números");

function somaEMedia(num1, num2) {
    let soma = num1 + num2;
    let media = soma / 2;

    console.log("Soma:", soma);
    console.log("Média:", media);
}

somaEMedia(10, 20);

console.log("Função que recebe um nome");

function analisarNome(nome) {
    console.log("Quantidade de letras:", nome.length);
    console.log("Nome em maiúsculo:", nome.toUpperCase());
}

analisarNome("Núbia Paiva");

console.log("Verificando se a frase contém HTML");

function verificarHTML(frase) {
    if (frase.includes("HTML")) {
        console.log("Contém a palavra HTML");
    } else {
        console.log("Não contém a palavra HTML");
    }
}

verificarHTML("Eu estou aprendendo HTML e JavaScript");
verificarHTML("Eu gosto de programar");


