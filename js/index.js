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
        navigator.screenshot.save(function(error,res){
          
          if(error){
            alert(error); 
          }else{
            // alert(res.filePath); //should be path/to/myScreenshot.jpg
          }
        },'jpg',100,'creandoapp-'+getRandom(1,999999999));
        
        document.getElementById('botonera').style.display = 'block';
    }

    function getRandom(min, max) { 
        return Math.random() * (max - min) + min;
    }