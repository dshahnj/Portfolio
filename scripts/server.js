'use strict'

const express = require('express');
const util = require('util');
var path = require('path');


const PORT = 8080;

const app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));


app.listen(PORT);

console.log("Running for Portfolio, on http://localhost: "+PORT)