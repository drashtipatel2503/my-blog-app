var http=require('http')
var express =require('express')
var port=process.env.PORT || 8080
var app=express();


http.createServer(app).listen(port);
console.log("Server at", port)