const mongoose = require('mongoose');

const ConnectDb= async(url)=>{
 try{
   await mongoose.connect(url);
 }catch(error){
    console.error("Database Connection Failed", error);
   }
}

module.exports = ConnectDb; 
