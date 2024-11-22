const express = require("express")

require("dotenv").config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const {createTodo , updateTood } = require("./types")
const todo = require("./db")

//create a Todo 
app.post("/" , async (req , res) => {
    const payload = req.body
    const parsedPayload = createTodo.safeParse(payload)

    if(!parsedPayload.success) {
        return res.status(411).json({
            status : false , 
            message : "You sent the wrong input!"
        })
    }
    const {title , description } = parsedPayload.data
    //save the todo in the database 
    console.log("saving into the mognoDb ")
    
    await todo.create({
        title   , 
        description
    })
    console.log("saved into the mongoDB ")
    return res.status(200).json({
        status : true , 
        message : "The todo has been saved successfully"
    })
    
})

//get all Todos
app.get("/" ,async (req,res)=> {

    const todos = await todo.find({})
    return res.status(200).json({
        status : true , 
        message : "The todos have been fetched successfully" ,
        data : todos
    })
})

//mark as done
app.put("/completed" , (req , res) => {
    
})

app.listen(3000 , () => {
    console.log("The server is running on the port 3000")
})

