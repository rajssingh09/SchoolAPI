const mongoose = require('mongoose');

const ConnectDb= async ()=>{
 try{
   await mongoose.connect(url);

    }catch(error){

    }
}