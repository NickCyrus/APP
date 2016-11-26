var App = {
            btnTakePhoto : 'takePhoto',
            btnSendPhoto : 'sendPhoto',
            imgContainer : 'photo',
    
            init : function(){
                this.bindEvents();
            },
            
            bindEvents : function(){
                 var takePhoto = document.getElementById(this.btnTakePhoto);
                 alert(takePhoto);
                 takePhoto.addEventListener('click', this.takePhoto, false);
                 var sendPhoto = document.getElementById(this.btnTakePhoto);
                 sendPhoto.addEventListener('click', this.sendPhoto, false);
            },
    
            takePhoto: function(){
              navigator.camera.getPicture(App.onPhotoDataSuccess, App.onFail, { quality: 20, allowEdit: true, destinationType:navigator.camera.DestinationType.DATA_URL });
            },
    
            savePhoto: function(){
                
            },
            
            onPhotoDataSuccess: function(imageData) {
                var photo = document.getElementById(this.imgContainer);
                photo.style.display = 'block';
                photo.src = "data:image/jpeg;base64," + imageData;
                var sendPhoto = document.getElementById('sendPhoto');
                sendPhoto.style.display = 'block';
             },
 
            onFail: function(message) {
                alert('Failed because: ' + message);
             }
    
            
        
    
}

