const mongoose = require("mongoose")
require("dotenv").config()

const mongoDBString = process.env.MONGODB_STRING
mongoose.connect(mongoDBString).then(() => {
    console.log("MongoDB is Connected")
}).catch((error) => {
    console.log(`MongoDB COnnection error ::: ${error}`)

})

const todoSchema = new mongoose.Schema({
    title : String , 
    description : String , 
    completed : {
        type : Boolean  , 
        default : false 
    }
})

module.exports.todo = mongoose.model("todo" , todoSchema)