const express = require("express");
const path = require('path');

const app = express();
const firebase = require('firebase-admin');
const functions = require('firebase-functions');

//pdf generation function for receipt
let pdfGeneratorService = require('./pdfGeneratorService');
 
  //set for the pug template 
  app.set('views', path.join(__dirname, 'views'));
  app.use('/bootstrap', express.static('node_modules/bootstrap/dist/css/'))
  app.use('/style', express.static('style'))
  app.set('view engine', 'pug');
  app.set('view engine', 'ejs');
  app.use(express.static("public"));
 

app.get('/receipt', pdfGeneratorService);


exports.app = functions.https.onRequest(app);

