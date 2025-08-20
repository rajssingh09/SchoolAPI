const mongoose = require('mongoose');

const ConnectDb= async (process.env)=>{
 try{
   await mongoose.connect();
console.log("Database Connected Successfully");
 }catch(error){
    console.error("Database Connection Failed", error);
   }
}

module.exports = { ConnectDb };