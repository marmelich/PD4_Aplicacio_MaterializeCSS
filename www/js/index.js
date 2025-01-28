document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // // Cordova is now initialized. Have fun!

    // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    document.getElementById("btnCapture").addEventListener("click", function () {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50, // Calidad de la imagen (0-100)
        destinationType: Camera.DestinationType.DATA_URL, // Devuelve Base64
        sourceType: Camera.PictureSourceType.CAMERA // Captura desde la cámara
    });

    function onSuccess(imageData) {
        // imageData contiene el string Base64 de la imagen
        var base64Image = imageData;
        console.log(base64Image);

        // Guarda en localStorage
        localStorage.setItem("savedImage", base64Image);

        // Muestra la imagen guardada
        var image = document.getElementById("image");
        image.src = base64Image;
        image.style.display = "block";
        document.getElementById("userPhoto").src = base64Image;

        alert("Imagen guardada en localStorage");
    }

    function onFail(message) {
        alert("Error al capturar la imagen: " + message);
    }
});
}

window.onload = (event) => {
    console.log("Pàgina carregada completament. Inicialitzant..");
    var options = { "swipeable": true };
    var el = document.getElementsByClassName('tabs');
    var instance = M.Tabs.init(el, options);

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      // specify options here
    });
};