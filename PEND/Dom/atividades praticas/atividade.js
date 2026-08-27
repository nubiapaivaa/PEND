//ATIVIDADE 1
document.getElementById("vermelho").addEventListener("click", function() {
    document.getElementById("titulo").style.color = "red";
});

document.getElementById("azul").addEventListener("click", function() {
    document.getElementById("titulo").style.color = "blue";
});


//ATIVIDADE 2
document.getElementById("toggle").addEventListener("click", function() {
    let mensagem = document.getElementById("mensagem");

    if (mensagem.style.display === "none") {
        mensagem.style.display = "block";
    } else {
        mensagem.style.display = "none";
    }
});

// ATIVIDADE 3
let texto = document.getElementById("texto");
let contador = document.getElementById("contador");

texto.addEventListener("keyup", function() {
    let quantidade = texto.value.length;
    contador.textContent = "Caracteres digitados: " + quantidade;
});


// ATIVIDADE 4
let btnContador = document.getElementById("btnContador");
let valorContador = document.getElementById("valorContador");
let contagem = 0;

btnContador.addEventListener("click", function() {
    contagem++;
    valorContador.textContent = contagem;
});


// ATIVIDADE 5
let novoItem = document.getElementById("novoItem");
let btnAdicionar = document.getElementById("btnAdicionar");
let listaItens = document.getElementById("listaItens");

btnAdicionar.addEventListener("click", function() {
    let texto = novoItem.value;

    if (texto.trim() !== "") {
        let novoItemLista = document.createElement("li");
        novoItemLista.textContent = texto;
        listaItens.appendChild(novoItemLista);

        novoItem.value = "";
    }
});


// ATIVIDADE 6
listaItens.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});


// Desafio Extra
listaItens.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        let confirmacao = confirm("Tem certeza que deseja remover este item?");
        if (confirmacao) {
            event.target.remove();
        }
    }
});


// Desafio HARD
let campoNome = document.getElementById("campoNome");
let btnEnviar = document.getElementById("btnEnviar");
let mensagemValidacao = document.getElementById("mensagemValidacao");

btnEnviar.addEventListener("click", function() {
    let nome = campoNome.value.trim();

    if (nome === "") {
        mensagemValidacao.textContent = "O campo nome é obrigatório";
        mensagemValidacao.style.color = "red";
    } else {
        mensagemValidacao.textContent = "Nome enviado com sucesso!";
        mensagemValidacao.style.color = "green";
    }
});