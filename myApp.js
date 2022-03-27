var express = require('express');
const res = require('express/lib/response');
var app = express();
require('dotenv').config();























app.use(function(req, res, next){
  
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


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

var delayInMilliseconds = 1000; //1 second

app.get('/now', (req, res, next) => {
     req.time = new Date().toString();
     next()
}, (req, res) => {
setTimeout(function() {
  //your code to be executed after 1 second
    res.json({
      'time': req.time
    })
}, delayInMilliseconds);
});
