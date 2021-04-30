/*var http=require('http')
var express =require('express')
var app=express();
var axios=require('axios')

var port =process.env.PORT || 8080

var mongoose = require('mongoose');
//var path=require('path')
//var cors=require('cors')
var appRoute=require('./routes/appRoutes');

app.use('/blogs',appRoute)

app.use(express.urlencoded({extended: true}));

app.use(express.json())


axios.post('http://localhost:8080/give',{
    name:"Drashti"
})
app.get('/', (req,res)=>{
   res.send("Hello")
});


app.post('/give', (req,res)=>{
    res.send(req.body.name);
})


mongoose.connect('mongodb://localhost:27017/blogDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db=mongoose.connection;
db.once('open',()=>{
    console.log("Database connected")
})

http.createServer(app).listen(port);
console.log("Server at", port)*/
/*
const express = require('express');
const app = express();

const port = 3000;
app.get('/', (req, res)=> res.send('Welcome to Tutorialspoint!'));

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Blog app listening on port ${port}!`));*/
/*
const express = require('express');
const app = express();

// set our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome!'));

app.get('/blog', function (req, res) {
   res.send('all routes');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));*/

const express = require('express');
const app = express();
var mongoose = require('mongoose');
var cors=require('cors');
const port = 3000;

var db = require('./config/db');
console.log("connecting--",db);
mongoose.connect(db.url);
app.use(cors());
app.use(express.json({extended: false}));
app.get('/', (req, res) => res.send('Welcome!'));

app.get('/blog', function (req, res) {
   res.send('blog');
});

var Blog = require('./models/blog');
var User = require('./models/user')


app.post('/api/user/create', function (req, res) {
   var user = new User(); 
   console.log("this" + req.body.name)
   user.name = req.body.name;
   user.email=req.body.email;
   user.password=req.body.password // set the student name (comes from the request)
   user.save(function(a,err) {
      if (err){
         res.send(err);
      }
         res.json({ message: 'student created!',  });
   });
});


app.post('/api/blog/create', function (req, res) {
    var blog = new Blog(); 
    console.log("this" + req.body.name)
    blog.title = req.body.title; // set the student name (comes from the request)
    blog.content = req.body.content; 
    blog.w_id = req.body.w_id; 
    blog.save(function(b,err) {
       if (err){
          res.send(err);
       }
          res.json({ message: 'student created!' });
          });
 });

 
 app.get('/api/user', function(req, res) {
   User.find(function(err, users) {
      if (err){
         res.send(err);
      }
      res.json(users); 
   });
});


 app.get('/api/blog', function(req, res) {
    Blog.find(function(err, blogs) {
       if (err){
          res.send(err);
       }
       res.json(blogs); // return all students in JSON format
    });
 });

 app.delete('/api/blogs/:blogs_id', function (req, res) {
    Blog.remove({
       _id: req.params.blogs_id
    }, function(err, bear) {
       if (err){
          res.send(err);
       }
       res.json({ message: 'Successfully deleted' });
    });
 });
 
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));


/*

var User = require('./models/users');


 app.get('/api/user', function(req, res) {
    User.find(function(err, users) {
       if (err){
          res.send(err);
       }
       res.json(users); 
    });
 });
 

 app.delete('/api/user/:user_id', function (req, res) {
    Blog.remove({
       _id: req.params.blogs_id
    }, function(err, bear) {
       if (err){
          res.send(err);
       }
       res.json({ message: 'Successfully deleted' });
    });
 });
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));
*/