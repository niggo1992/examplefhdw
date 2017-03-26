/**
 * Created by nico_ on 22.03.2017.
 */
'use strict';

const express = require('express');
const PORT = 8080;
const app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send('Hello world\n');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
