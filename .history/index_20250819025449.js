const express= require('express');
const app= express();
const Db= require('./DB/db');

const PORT= process.env.PORT || 3000;


Db.ConnectDb(process.env.DB_URL).then()=>{
    console.log("Connected to the database");
}).catch((error)=>{
    console.error("Database connection error:", error);
}
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})