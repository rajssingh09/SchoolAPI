const mongoose= require('mongoose');

const SchoolSchema= new mongoose.Schema({
    id :{
        type: Number,
        required:true,
        unique:true
    },
    }
})