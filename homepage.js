window.addEventListener('click',() => {
    const audio = document.getElementById("song");
    audio.volume=0.3;
  
    audio.play();
    fadeIn(audio);
  
    audio.addEventListener('ended', () => {
        fadeOut(audio);
      });
});

function fadeIn(audio) {
    let volume = 0;
    audio.volume = volume;
    const fade = setInterval(() => {
        if (volume < 0.3) {
            volume += 0.02;
            audio.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

function fadeOut(audio) {
    let volume = 1;
    const fade = setInterval(() => {
        if (volume > 0) {
            volume -= 0.02;
            audio.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);
}



const playButton1 = document.getElementById('play-button');
const normalImage1 = document.getElementById('play-button-img');
const hoverImage1 = document.getElementById('play-button-hover');

const playButton3 = document.getElementById('abtus-button');
const normalImage3 = document.getElementById('abtus-button-img');
const hoverImage3 = document.getElementById('abtus-button-hover');

playButton1.addEventListener('mouseenter', () => {
  normalImage1.style.display = 'none';
  hoverImage1.style.display = 'block';
});

playButton1.addEventListener('mouseleave', () => {
  normalImage1.style.display = 'block';
  hoverImage1.style.display = 'none';
});


playButton3.addEventListener('mouseenter', () => {
  normalImage3.style.display = 'none';
  hoverImage3.style.display = 'block';
});

playButton3.addEventListener('mouseleave', () => {
  normalImage3.style.display = 'block';
  hoverImage3.style.display = 'none';
});

// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
//  path is used to set default directories for MVC and also for the static files
const path = require('path'); 
// include the defined package


// Step 4: Creates our express server
const app = express();

//Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route index.hbs when website initially starts and when home is clicked from the nav bar or whenever a process needs to go back to home 
app.get('/', (req, res) => {
    res.render('index.hbs');
})


// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));