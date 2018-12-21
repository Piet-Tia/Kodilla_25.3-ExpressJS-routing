const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
})

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        stringifyFile = data + req.params.note;
        fs.writeFile('./test.json', stringifyFile, function (err) {
            if (err) throw err;
            console.log('file updated');
            return;
        });
    });
});

app.listen(3000);

/* test code:
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
});
app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});
app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});
app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});
app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});
app.get('/:id', function(req, res) {
    console.log('Otrzymałem żądanie GET z parametrem id');
    res.send('Identyfikator, który został dopisany to ' + req.params.id);
});
app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
*/
