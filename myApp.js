var express = require('express');
var app = express();
require('dotenv').config();




































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