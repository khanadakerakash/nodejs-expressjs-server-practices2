/**
 * Created by Kh Akash on 3/26/2017.
 */
const express = require('express');
const hbs     = require('hbs');

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('creatorName', ()=> {
   return "Kh Akash";
});

hbs.registerHelper('nowYears', ()=> {
    return new Date().getFullYear();
});

app.get('/', (req,res) => {
   res.render('home', {
       page_name  : "Home page",
       name       : "Home",
       description: "home page bla bla bla..."
   });
});

app.get('/about', (req,res) => {
    res.render('about', {
        page_name  : "about page",
        name       : "about",
        description: "about page bla bla bla..."
    });
});

app.get('/work', (req,res) => {
    res.render('work', {
        page_name  : "work page",
        name       : "work",
        description: "work page bla bla bla..."
    });
});

app.get('/contact', (req,res) => {
    res.render('contact', {
        page_name  : "contact page",
        name       : "contact",
        description: "contact page bla bla bla..."
    });
});

app.listen(3000);