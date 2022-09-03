require("dotenv").config()
const mongoose = require("mongoose")
//console.log(process.env.DB_URL)
const connect =  async ()=>{
    return await mongoose.connect(process.env.DB_URL)
}
module.exports= connect