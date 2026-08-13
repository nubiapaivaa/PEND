function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

function somar(a, b) {
    return a + b;
}

console.log(somar(3, 5));

function saudacaoNome(nome) {
    console.log("Olá, " + nome);
}
saudacaoNome("Núbia");

console.log("Função que calcula o IMC");

let peso = 70; 
let altura = 1.75;

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}
console.log(calcularIMC(45, 1.67));

console.log("Verificar se o número é par ou ímpar");
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = 4;
console.log(numero, "é", parOuImpar(numero));
let numero2 = 7;
console.log(numero2, "é", parOuImpar(numero2));

console.log("------------------------FUNÇÕES NATIVAS------------------------");
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let dataHora = new Date();

    console.log("Dia:",dataHora.getDate());
    console.log("Mês:",dataHora.getMonth() + 1);
    console.log("Ano:",dataHora.getFullYear());
    console.log("Hora:",dataHora.getHours());
    console.log("Minutos:",dataHora.getMinutes());
    console.log("Segundos:",dataHora.getSeconds());

    return `${dataHora.getHours()}:${dataHora.getMinutes()}:${dataHora.getSeconds()};${dataHora.getDate()}/${dataHora.getMonth() + 1}/${dataHora.getFullYear()}`;

}

mostrarDataHora();

console.log("------------------------FUNÇÕES MATEMATICAS------------------------");
console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondamento:", Math.sqrt(numero));
    console.log("Pra cima:", Math.ceil(numero));
    console.log("Pra baixo:", Math.floor(numero));
    console.log("Quadrado:", Math.pow(numero, 2));
    console.log("Valor absoluto:", Math.abs(numero));

}

calcularOperacoes(7.8);

console.log("------------------------FUNÇÕES STRING------------------------");

function analisarString(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculas:", texto.toUpperCase());
    console.log("Minúsculas:", texto.toLowerCase());
}

analisarString("JavaScript");

function oQueFazEssaFuncao(frase) {
    console.log(frase.includes("JavaScript"));
}

oQueFazEssaFuncao("Eu estudo JavaScript!");

function eEssaAqui(nome,curso) {
    return "Aluno: " + nome + "| Curso:" + curso;
}

console.log(eEssaAqui("Núbia", "Front-end"));
