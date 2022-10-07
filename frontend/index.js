const express = require("express");
const path = require("path");
const config = require("./config/config");
const bodyParser = require("body-parser");
const app = express();

//Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/php', express.static(__dirname + 'public/php'));
app.use('/scss', express.static(__dirname + 'public/scss'));

//Templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//body parser
app.use(bodyParser.urlencoded({ extended : true}));
//Routes
const indexRouter = require('./src/routes/index');
const singleRouter = require('./src/routes/single_course');
const lecturersRouter = require('./src/routes/lecturers');
const lecturerSingleRouter = require('./src/routes/lecturerSingle');
const singleProductRouter = require('./src/routes/singleProduct');
const productsRouter = require('./src/routes/products');
const academicsRouter = require('./src/routes/courses');
//Pages
app.use('/', indexRouter);
app.use('/academics', singleRouter);
app.use('/lecturers', lecturersRouter);
app.use('/lecturers', lecturerSingleRouter);
app.use('/admission', (req, res) => {
    res.render('admission-form');
});
app.use('/academics', academicsRouter);
app.use('/contact', (req, res) => {
    res.render('contact');
});
app.use('/about', (req, res) => {
    res.render('about');
});

app.use('/coming-soon', (req, res) => {
    res.render('coming-soon');
});

app.use('/team', (req, res) => {
    res.render('our-teachers');
});

//listen on port
app.listen(config.PORT, function (err){
    if (err)
    {
        return console.log("An error occured.");
    }
    console.log("The server is running on " + config.PORT);
});