var express = require('express');
const res = require('express/lib/response');
var app = express();
require('dotenv').config();
var bodyParser = require("body-parser");





app.use(function(req, res, next){
  
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


app.use(bodyParser.urlencoded({extended: false}));




 module.exports = app;
 console.log("Hello World");
 app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

 /**app.get("/json", function(req, res) {
   res.json({
     message: "Hello json"
   });
 });
 **/
  
app.get("/json", function(req, res) {
  console.log(process.env.MESSAGE_STYLE, " <= message style");
  if(process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "HELLO JSON"
    });
  } else {
    res.json({
      message: "Hello json"
    });
  }
});

app.get("/:word/echo", function(req, res){
  const { word } = req.params;
  res.json({
    echo: word
  });
});

