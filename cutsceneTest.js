function createCutscene() {
  document.getElementById("container").style.display = "none";
  const myWindow = window.open();
  myWindow.document.write( '<link href="cutscene.css" rel="stylesheet" type="text/css"/>, <div class="cutscene"> <video width="window.innerWidth" height="window.innerHeight" autoplay muted> <source src="images/eidolonanimatic.mp4" type="video/mp4"> </video> </div>'  
  );
}
