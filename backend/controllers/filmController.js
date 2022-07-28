var express=require('express');
var root=express.Router();
var objectId=require('mongoose').Types.ObjectId;
var {Movie}=require('../models/filmModel');




root.post('/',(req,res)=>{
    var Movie1=new Movie({
        movie_name:req.body.movie_name,
        rating:req.body.rating,
        cast:req.body.cast,
        genre:req.body.genre,
        release_date:req.body.release_date
    })
    Movie1.save((err,data)=>{                              //for insert function
        if(!err){
            res.send(data)
        }
        else{
            console.log("Error in insertion")
        }
    })
});


root.get('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        Movie.findById(req.params.id,(err,data)=>{                              //for edit data retrieve function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in edit data")
            }
        })
    }
});
root.put('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        var Movie2={
            movie_name:req.body.movie_name,
            rating:req.body.rating,
            cast:req.body.cast,
            genre:req.body.genre,
            release_date:req.body.release_date
        }
        Movie.findByIdAndUpdate(req.params.id,{$set:Movie2},{new:true},(err,data)=>{                      //for update data function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in update data")
            }
        })
    }
})

root.delete('/:id',(req,res)=>{
    if(!objectId.isValid(req.params.id)){
        res.send("No such record");
    }
    else{
        Movie.findByIdAndRemove(req.params.id,(err,data)=>{                              //for delete data function
            if(!err){
                res.send(data)
            }
            else{
                console.log("Error in delete data")
            }
        })
    }
})

module.exports=root;