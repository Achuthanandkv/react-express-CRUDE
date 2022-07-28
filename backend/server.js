var express =require('express');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());


var root=require('./controllers/filmController');
var mongoose=require('./db');

app.listen(4000,console.log("Port is running"));

app.use('/',root);
