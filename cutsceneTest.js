function createCutscene() {
  document.getElementById("container").style.display = "none";
  const myWindow = window.open();
  myWindow.document.write( '<link href="cutscene.css" rel="stylesheet" type="text/css"/>, <div class="cutscene"> <video width="1077" height="578" autoplay muted> <source src="images/eidolonanimatic.mp4" type="video/mp4"> </video> </div>'  
  );
}
