console.log("Olá, JavaScript");

let a = 10;
let b = 3;

console.log("adição +:", a + b);
console.log("subtração -:", a - b);
console.log("multiplicação *:", a * b);
console.log("divisão /:", a / b);
console.log("resto da divisão %:", a % b);
console.log("exponenciação **:", a ** b);
console.log("igual valor e tipo ===:", a === b);
console.log("diferente valor e tipo !==:", a !== b);

let contador = 5;
contador++;
console.log(contador);

let nota1 = 10;
let nota2= 8;
let nota3= 5;
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media);

let idade = 17;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let n1 = 6;
let n2 = 4;
if (n1 > n2) {
    console.log("n1 é maior que n2");
} else if (n1 < n2) {
    console.log("n1 é menor que n2");
}

console.log("Op.Lógicos");
let idade2 = 20;
let temCarteira = true;

console.log(idade2 >= 18 && temCarteira); 

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado); //true

console.log("Verificar se o aluno foi aprovado");
let nota = 7;
let frequencia = 75;
if (nota >= 7 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

console.log("Verificar acesso com login");
let temLogin = false;
let temToken = true;
if (temLogin || temToken) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}
