require('dotenv').config();
const express= require('express');
const app= express();
const cors= require('cors');
const Db= require('./DB/db');
const School = require('./Schema/School');
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

app.post('/api/addSchool', async(req,res)=>{
    const { name,address, latitude, longitude } = req.body;
    try{
      const school= new School({
        id: Date.now(),
        name,
        address,
        latitude,
        longitude
      })
       await school.save();
       res.status(201).json({ message: "SchoolInfo added successfully", school });
    }catch(error){
         console.error("Error adding school:", error);
         res.status(500).json({ message: "Failed to add school", error: error.message });
    }
   app.get('/api/listSchools', async(req,res)=>{
     const {latitude, longitude} = req.query;
     if(!latitude || !longitude) {
     res.status(400).json({ message: "Latitude and longitude are required" });
    return;
     }
 try{
        const schools = await School.find(latitude && longitude);
        res.status(200).json(schools);
    }catch(error){
        console.error("Error fetching schools:", error);
        res.status(500).json({ message: "Failed to fetch schools", error: error.message });
    }
})
module.exports =app;
