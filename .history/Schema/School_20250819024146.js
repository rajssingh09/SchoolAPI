const mongoose= require('mongoose');

const SchoolSchema= new mongoose.Schema({
    id :{
        type: Number,
        required:true,
        unique:true
    },
    name:{
       type:String,
       required:true,
   },
   address:{
    type:String,
 },
latitude:{
    type:Number,
    required:true
},
longitude:{
    type:Number,
    required:true,
    
}    
})