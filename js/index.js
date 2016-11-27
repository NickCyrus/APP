    var pictureSource;    
    var destinationType;
    var strImgBase64
    
    document.addEventListener("deviceready",onDeviceReady,false);
    
    
    function onDeviceReady() {
        pictureSource   = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
   
    }

    function onPhotoDataSuccess(imageURI) { 
            var imgProfile = document.getElementById('smallImage');
            imgProfile.style.display = 'block';
            imgProfile.src = "data:image/jpeg;base64,"+imageURI;
            strImgBase64   = "data:image/jpeg;base64,"+imageURI;
            setTimeout(capturaScreen, 1000);
            
    }
     
    function capturePhoto() {
        document.getElementById('botonera').style.display = 'none';
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, 
                                    { quality: 50, 
                                      destinationType: destinationType.DATA_URL,
                                      correctOrientation: true 
                                    });
    }

    function onFail(message) {
      document.getElementById('botonera').style.display = 'block';    
      alert('Failed because: ' + message);
    }

    function capturaScreen(){
        var nameField = 'creandoapp-'+getRandom(1,999999999);
        navigator.screenshot.URI(function(error,res){
        // navigator.screenshot.save(function(error,res){  
          if(error){ 
            alert(error); 
          }else{
              strImgBase64 =  res.URI
              var shareBtn = '<button onclick="window.plugins.socialsharing.share(\'Feliz navidad\', \'Esta es tu foto de navidad\', \''+strImgBase64+'\', null)">Compartir</button>';
              
              document.getElementById('botonera').innerHTML = shareBtn;
              document.getElementById('botonera').style.display = 'block';
              
          }
        },'jpg',100,nameField);
        
        
    }

    function getRandom(min, max) { 
        return Math.random() * (max - min) + min;
    }