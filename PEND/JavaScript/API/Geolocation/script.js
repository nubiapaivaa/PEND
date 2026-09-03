navigator.geolocation.getCurrentPosition(
    function (posicao) {
        document.getElementById("imagem-localizacao").src = "image.png";
        console.log("Latitude: ", posicao.coords.latitude);
        console.log("Longitude: ", posicao.coords.longitude);
        console.log("Precisão: ", posicao.coords.accuracy);
    },
    function (erro) {
        document.getElementById("imagem-localizacao").src = "image1.png";
        console.log("Não foi possível obter a localização: ");
    }

    
);