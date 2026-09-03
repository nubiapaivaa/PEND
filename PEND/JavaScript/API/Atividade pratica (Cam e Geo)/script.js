navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function (stream) {

    const video = document.querySelector("#camera");

    video.srcObject = stream;

})
.catch(function (erro) {

    console.log("Erro ao acessar a câmera: " + erro.message);

});


// Obter localização
navigator.geolocation.getCurrentPosition(

    function (posicao) {

        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;
        const precisao = posicao.coords.accuracy;

        document.getElementById("latitude").textContent =
            "Latitude: " + latitude;

        document.getElementById("longitude").textContent =
            "Longitude: " + longitude;

        document.getElementById("precisao").textContent =
            "Precisão: " + precisao + " metros";

    },

    function (erro) {

        console.log("Não foi possível obter a localização.");

        document.getElementById("latitude").textContent =
            "Latitude: Não disponível";

        document.getElementById("longitude").textContent =
            "Longitude: Não disponível";

        document.getElementById("precisao").textContent =
            "Precisão: Não disponível";

    }

);
