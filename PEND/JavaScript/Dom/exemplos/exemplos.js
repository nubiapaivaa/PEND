document.getElementById("conteudo").innerHTML = "<p>Olá,mundo DOM!</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML!";

document.getElementById("foto").setAttribute("src", "https://images7.alphacoders.com/133/1339214.png");
document.getElementById("foto").setAttribute("width", "600");
document.getElementById("foto").setAttribute("height", "400");

//Retorna o valor do atributo
let url =  document.getElementById("link").getAttribute("href");
console.log(url); "https://www.youtube.com/watch?v=pcS1-XSjzG8&list=PLuM1cDb0L3BKJnhldrip-TidwMNO_6cD-";

//define o valor de uma propriedade CSS
document.getElementById("caixa").style.backgroundColor = "lightpink";

//Adiciona uma classe CSS
document.getElementById("alerta").classList.add("destaque");

//Remove uma classe CSS
document.getElementById("alert").classList.remove("oculto");

//Cria um elemento HTML dinamicamente
let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este parágrafo foi criado pelo JavaScript!";
document.getElementById("container").appendChild(novoParagrafo);

//Adiciona um novo elemento como filho de um existente
let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

//remove um elemento filho de um elemento existente
let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);

//Evento de clique
let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");

botao.addEventListener("click", function() {
    texto.textContent = "Texto alterado após o clique!";
});
