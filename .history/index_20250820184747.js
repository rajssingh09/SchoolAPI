require('dotenv').config();
const express= require('express');
const app= express();
const cors= require('cors');
const Db= require('./DB/db');
app.use(cors());
app.use(express.json());

const PORT= process.env.PORT || 3000;


app.listen(PORT, (DB_URL)=>{
    Db.ConnectDb(process.env.DB_URL).then(()=>{
    console.log("Connected to the database");
    console.log(`Server is running on port ${PORT}`);
}).catch((error)=>{
    console.error("Database connection error:", error);
})
})

app.post('/api/addSchool',)
module.exports =app;
