//Inicia pegando os elementos do formulário.
let form = document.getElementById("form");
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let telefone = document.getElementById("telefone");
let endereco = document.getElementById("endereco");
let confirmarSenha = document.createElement("input");

//Quando o formulário for enviado, ele previne o comportamento padrão e chama as funções de validação.
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Funções de validação para cada campo do formulário.
  validarNome();
  validarEmail();
  validarSenha();
  validarTelefone();
  validarendereco();

//Se todos os campos estiverem com a classe "sucesso", exibe uma mensagem de sucesso.
  if (
    nome.classList.contains("sucesso") &&
    email.classList.contains("sucesso") &&
    senha.classList.contains("sucesso") &&
    telefone.classList.contains("sucesso") &&
    endereco.classList.contains("sucesso")
  ) {
    //Exibe a mensagem de sucesso.
    document.getElementById("mensagem").textContent =
      "Cadastro realizado com sucesso!";
  }
});

//Funções de validação para cada campo do formulário.

//Valida o nome verificando se ele não está vazio.
function validarNome() {
  if (nome.value.trim() === "") {
    erro(nome, "erroNome", "Nome obrigatório");
  } else {
    sucesso(nome, "erroNome");
  }
}

//Valida o email usando uma expressão regular para verificar se o formato é válido.
function validarEmail() {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email.value)) {
    sucesso(email, "erroEmail");
  } else {
    erro(email, "erroEmail", "Email inválido");
  }
}

//Valida a senha verificando se ela tem pelo menos 6 caracteres.
function validarSenha() {
  if (senha.value.length >= 6) {
    sucesso(senha, "erroSenha");
  } else {
    erro(senha, "erroSenha", "Mínimo 6 caracteres");
  }
}

//Valida o telefone usando uma expressão regular para verificar se ele contém apenas números e tem entre 8 e 15 dígitos.
function validarTelefone() {
  let regex = /^[0-9]{8,15}$/;

  if (regex.test(telefone.value)) {
    sucesso(telefone, "erroTelefone");
  } else {
    erro(telefone, "erroTelefone", "Telefone inválido");
  }
}

//Valida o endereço verificando se ele não está vazio.
function validarendereco() {
  if (endereco.value.trim() === "") {
    erro(endereco, "erroEndereco", "Endereço obrigatório");
  } else {
    sucesso(endereco, "erroEndereco");
  }
}

//Função para mostrar ou esconder a senha quando o botão é clicado.
let botao = document.querySelector("#botaosenha");

//Adiciona um evento de clique ao botão para mostrar ou esconder a senha.
botao.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.type = "text";
    botao.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
  } else {
    senha.type = "password";
    botao.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
  }
});

//Função para exibir mensagens de erro ou sucesso, adicionando ou removendo classes CSS e atualizando o texto dos elementos de erro.
function erro(input, idErro, mensagem) {
  input.classList.add("erro");
  input.classList.remove("sucesso");

  //Atualiza o texto do elemento de erro com a mensagem fornecida.
  document.getElementById(idErro).textContent = mensagem;
}

//Função para exibir mensagens de sucesso, removendo a classe de erro e adicionando a classe de sucesso, além de limpar o texto dos elementos de erro.
function sucesso(input, idErro) {
  input.classList.remove("erro");
  input.classList.add("sucesso");

  //Limpa o texto do elemento de erro.
  document.getElementById(idErro).textContent = "";
}