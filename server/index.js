import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect('mongodb+srv://charupsharma5:aiNejNHgY1k0M5g9@joblisting.48p71bi.mongodb.net/?retryWrites=true&w=majority&appName=JobListing').then(()=>{
        console.log("✅ Connected to MongoDB");
    }).catch((error)=>{
        console.log("❌ Connection failed to MongoDB");
    })
})