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

function getTheCurrentTimeString(){
  return new Date().toString();
}


app.use("/now", function(req, res, next){
  req.time = getTheCurrentTimeString();
  next();
}, 
  function(req, res){
    res.json({
      'time': req.time
    });
  }
);
