//Evento de digitação
let input = document.querySelector("#nome");
let resultado = document.querySelector("#resultado");

input.addEventListener("keyup", function() {
    resultado.textContent = input.value;
});
