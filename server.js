const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serve static files from the root directory

// Setup Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        eq: (v1, v2) => v1 === v2
    }
}));
app.set('view engine', 'hbs');
app.set('views', './views');

// Move CSS file to public directory
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get('/', (req, res) => {
    res.render('form', {
        title: 'Basic Info',
        formData: {}
    });
});

app.post('/submit', (req, res) => {
    const userInfo = {
        info: {
            name: req.body.nickname,
            pronouns: req.body.pronouns,
            color: req.body.color,
            hobby: req.body.hobby,
            food: req.body.food
        }
    };

    // Save to JSON file
    fs.writeFileSync(
        path.join(__dirname, 'models', 'user-info.json'),
        JSON.stringify(userInfo, null, 2)
    );

    // Redirect to the next page
    res.redirect('/ch1.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});