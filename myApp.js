var express = require('express');
var app = express();
require('dotenv').config();






















app.use("/now", function(req, res, next){
  req.time = new Date().toString();
  next();
},
  function(req, res){
    res.send({
      time: req.time
    });
  }
);


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
