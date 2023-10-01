const exp = require('constants');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    const fPath = path.join(__dirname, "index.html");
    res.sendFile(fPath);
});

app.listen(3000);