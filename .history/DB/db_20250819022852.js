const mongoose = require('mongoose');

const ConnectDb= async ()=>{
 try{
   await mongoose.connect(url);
console.log("Database Connected Successfully");
 }catch(error){
    console.

    }
}