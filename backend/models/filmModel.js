var mongoose=require('mongoose');
var Movie=mongoose.model('Movie',{
    movie_name:{type:String},
    rating:{type:Number},
    cast:{type:Array},
    genre:{type:String},
    release_date:{type:Date}
})
module.exports={Movie};