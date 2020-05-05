var cameraOpts;     

window.onload = function() {
    this.document.addEventListener('deviceready', init, false);
}

/** init()
 * sets the options that we pass to the phone's camera.
 */
function init() {
    cameraOpts = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
      };
}

/** takePic()
 * calls the getPicture() to launch native camera app w/ the set camera options.
 * If the picture is successful then camSuccess() is called if not the camFail()
 */
function takePic() {
    navigator.camera.getPicture(camSuccess, camFail, cameraOpts);
}

/**cameraSuccess(imageData)
 * sets the picture as the source of resultsImg <img> element
 * @param {*} imageData 
 */
function camSuccess(imageData){
    var lastPhoto = document.getElementById('resultsImg');
    lastPhoto.src = imageData;
}

/**cameraFail(message)
 * displays the failure message in an alert window
 * @param {*} message 
 */
function camFail(message){
    alert("Error: " + message);
  }