function validarEmail() {

    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagemEmail");

    if (email.includes("@") && email.includes(".")) {

        mensagem.innerHTML = "Email válido!";
        mensagem.style.color = "green";

    } else {

        mensagem.innerHTML = "Email inválido!";
        mensagem.style.color = "red";

    }

}

function verificarSenha() {

    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagemSenha");

    if (senha.length < 6) {

        mensagem.innerHTML = "Senha fraca";
        mensagem.style.color = "red";

    } else {

        mensagem.innerHTML = "Senha forte";
        mensagem.style.color = "green";

    }
}