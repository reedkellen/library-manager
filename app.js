//REQUIRE MODULES
const express = require('express');
const app = express();

//USE PUG FOR THE TEMPLATING
app.set('view engine', 'pug');

//Creates a path for static files (e.g. CSS)
app.use('/static', express.static('public'));

//SET UP THE HOME PAGE
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/all_books.html', (req, res) => {
    res.render('all_books');
});

app.get('/all_patrons.html', (req, res) => {
    res.render('all_patrons');
});

app.get('/all_loans.html', (req, res) => {
    res.render('all_loans');
});

//CREATE A 404 ERROR PAGE USING ERROR.PUG
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log('The app is running on localhost:3000');
})
