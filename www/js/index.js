document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // // Cordova is now initialized. Have fun!
    document.getElementById("btnCapture").addEventListener("click", function () {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50, // Calidad de la imagen (0-100)
        destinationType: Camera.DestinationType.DATA_URL, //devuelve Base64
        sourceType: Camera.PictureSourceType.CAMERA //captura desde la cam
    });

    function onSuccess(imageData) {
        var base64Image = imageData;
        console.log(base64Image);

        localStorage.setItem("savedImage", base64Image); //guardar en localStorage

        //mostrar imagen
        var image = document.getElementById("image");
        image.src = base64Image;
        image.style.display = "block";
        document.getElementById("userPhoto").src = base64Image; //ponerla de user photo
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