const residuos = document.querySelectorAll(".residuo");
const lixeiras = document.querySelectorAll(".lixeira");

let residuoArrastado = null;

residuos.forEach(residuo => {

    residuo.addEventListener("dragstart", () => {
        residuoArrastado = residuo;
    });

});

lixeiras.forEach(lixeira => {

    lixeira.addEventListener("dragover", (evento) => {
        evento.preventDefault();
    });

});

let pontos = 0;

lixeiras.forEach(lixeira => {

    lixeira.addEventListener("drop", () => {

        const tipoResiduo = residuoArrastado.dataset.tipo;
        const tipoLixeira = lixeira.dataset.tipo;

        if (tipoResiduo === tipoLixeira) {

            lixeira.appendChild(residuoArrastado);

            alert("✅ Correto!");

            pontos = pontos + 10;

            if (pontos == 100) {
                alert("🎉 Você ganhou, parabéns! Obrigada por jogar nosso jogo💚")
            }

        } else {

            alert("❌ Lixeira incorreta!");

        }

    });

});