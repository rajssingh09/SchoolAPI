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
    required:true,
    min: -90,
    max: 90
},
longitude:{
    type:Number,
    required:true,
    min: -180,
    max: 180
}    
})

const School= mongoose.model('School', SchoolSchema);
mod