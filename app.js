const express = require('express');
const path = require('path');
const db = require('./data/database');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({entended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    // const fPath = path.join(__dirname, "index.html"); ---> after ejs
    res.render('index');
});

app.post('/', async function( req, res){
    const data = [
        req.body.first_name,
        req.body.last_name,
        req.body.blog_post
    ];
    await db.query('INSERT INTO blog_data(first_name, last_name, blog_post) VALUES(?)', [data]);
    
    console.log(data)
    res.redirect('/');

});

app.listen(3000);