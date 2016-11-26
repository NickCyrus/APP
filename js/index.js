    var pictureSource;    
    var destinationType;

    document.addEventListener("deviceready",onDeviceReady,false);

    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    /*
    function onPhotoDataSuccess(imageData) {
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }*/


    function onPhotoURISuccess(imageURI) {
      var largeImage = document.getElementById('largeImage');
      largeImage.style.display = 'block';
      largeImage.src = imageURI;
    }

    function capturePhoto() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,destinationType: destinationType.DATA_URL });
    }

    function capturePhotoEdit() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true, destinationType: destinationType.DATA_URL });
    }

    function getPhoto(source) {
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source });
    }

    function onFail(message) {
      alert('Failed because: ' + message);
    }

    function movePic(file){ 
        window.resolveLocalFileSystemURI(file, resolveOnSuccess, onFail); 
    } 

    function resolveOnSuccess(entry){ 
        var d = new Date();
        var n = d.getTime();
        //new file name
        var newFileName = n + ".jpg";
        var myFolderApp = "MyAppFolder";

        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
        //The folder is created if doesn't exist
        fileSys.root.getDirectory( myFolderApp,
                        {create:true, exclusive: false},
                        function(directory) {
                            entry.moveTo(directory, newFileName,  successMove, onFail);
                        },
                        onFail);
                        },
        onFail);
    }

    function successMove(entry) {
        sessionStorage.setItem('imagepath', entry.fullPath);
    }

    

    function onPhotoDataSuccess(imageURI) { 
            var imgProfile = document.getElementById('smallImage');
            imgProfile.src = imageURI;
            movePic(imageURI);
    }
     