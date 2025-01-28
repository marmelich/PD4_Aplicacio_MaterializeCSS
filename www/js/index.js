document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // // Cordova is now initialized. Have fun!

    // console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
    document.getElementById("btnCapture").addEventListener("click", function () {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 100,
        targetWidth: 1000,
        targetHeight: 1330,
        destinationType: Camera.DestinationType.NATIVE_URI,
        saveToPhotoAlbum: true,
        correctOrientation: true
        });
        // also tested with FILE_URI, and all possible setting for destinationType, and it does return the correct file path, but the file path isnt allowed to be displayed....and showing the not allowed to load local resource error...does it have something to do with Google changing the location for secure storage?
        
        function onPhotoDataSuccess(imageURI) {
        console.log(imageURI);
        var cameraImage = document.getElementById('image');
        cameraImage.src = imageURI;
        }
        
        function onFail(message) {
        console.log(message);
        }
      })
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

