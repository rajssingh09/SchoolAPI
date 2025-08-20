const express= require('express');
const app= express();
const Db= require('./DB/db');

const PORT= process.env.PORT || 3000;


Db.ConnectDb();
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})