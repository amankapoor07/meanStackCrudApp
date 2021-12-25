const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if(!err){
        console.log('DB Connection successful');
    }else{
        console.log('DB Connection failed'+ err);
    }
})
module.exports=mongoose;