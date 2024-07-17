const mongoose = require("mongoose");

const db = async()=>{
  try {
    await mongoose.connect("mongodb+srv://krishnadesai4:krishna123@cluster0.vquo917.mongodb.net/adminDB");
    console.log("Database is Connected..."); 
  } catch (error) {
    console.log("Database can't be Connected...");
  }
}

module.exports = db;