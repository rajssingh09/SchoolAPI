require('dotenv').config();
const express= require('express');
const app= express();
const cors= require('cors');
const Db= require('./DB/db');
const School = require('./Schema/School');
app.use(cors());
app.use(express.json());

const PORT= process.env.PORT || 3000;


app.listen(PORT, ()=>{
    Db.ConnectDb(process.env.DB_URL).then(()=>{
    console.log("Connected to the database");
    console.log(`Server is running on port ${PORT}`);
}).catch((error)=>{
    console.error("Database connection error:", error);
})
})

// Add School API
app.post('/api/addSchool', async(req,res)=>{
    const {name ,address, latitude, longitude } = req.body;
    try{
      const school= new School({
        id:Date.now(),
        name,
        address,
        latitude,
        longitude
      });
       await school.save();
       res.status(201).json({ message: "SchoolInfo added successfully", school });
    }catch(error){
         console.error("Error adding school:", error);
         res.status(500).json({ message: "Failed to add school", error: error.message });
    }
});

    // List Schools API (sorted by distance)
   app.get('/listSchools', async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const userLat = Number(latitude);
    const userLon = Number(longitude);

    const schools = await School.find({});

    // Calculate distance using Haversine formula in JS
    const toRad = deg => (deg * Math.PI) / 180;
    const R = 6371; // Earth radius in km

    const schoolsWithDistance = schools.map(s => {
      const dLat = toRad(s.latitude - userLat);
      const dLon = toRad(s.longitude - userLon);
      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(userLat)) *
          Math.cos(toRad(s.latitude)) *
          Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.asin(Math.sqrt(a));
      const distance = R * c;
      return { ...s.toObject(), distance_km: distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance_km - b.distance_km);

    res.json({ count: schoolsWithDistance.length, schools: schoolsWithDistance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
})
module.exports = app;

