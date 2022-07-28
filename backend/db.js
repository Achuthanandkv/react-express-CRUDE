const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FILM_CRUDE',(err)=>{
    if(!err){
        console.log("DB connected successflly")
    }
    else{
        console.log("Connection Error")
    }
})
module.exports=mongoose;