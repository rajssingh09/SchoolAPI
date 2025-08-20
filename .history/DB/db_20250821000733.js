const mongoose = require('mongoose');

export const ConnectDb= async(URL)=>{
 try{
   await mongoose.connect();
console.log("Database Connected Successfully");
 }catch(error){
    console.error("Database Connection Failed", error);
   }
}

