function createCutscene() {
  document.getElementById("container").style.display = "none";
  const myWindow = window.open();
  myWindow.document.write( '<link href="cutscene.css" rel="stylesheet" type="text/css"/>, <div class="cutscene"> <video width="window.innerWidth" height="window.innerHeight" autoplay muted> <source src="https://cdn.glitch.global/9c48f61b-bf4f-455f-a449-a1e4225c79a2/cutsceneTest.mp4?v=1737288208619" type="video/mp4"> </video> </div>'  
  );
}
