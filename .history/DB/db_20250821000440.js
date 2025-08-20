const mongoose = require('mongoose');

const ConnectDb= async (DB_URL)=>{
 try{
   await mongoose.connect();
console.log("Database Connected Successfully");
 }catch(error){
    console.error("Database Connection Failed", error);
   }
}

module.exports = { ConnectDb };