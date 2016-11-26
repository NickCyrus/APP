    var pictureSource;    
    var destinationType;

    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }

    function onPhotoDataSuccess(imageURI) { 
            var imgProfile = document.getElementById('smallImage');
            imgProfile.style.display = 'block';
            imgProfile.src = "data:image/jpeg;base64,"+imageURI;
    }
     
    function capturePhoto() {
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: destinationType.DATA_URL });
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    }