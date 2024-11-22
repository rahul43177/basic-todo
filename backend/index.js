const express = require("express")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const {createTodo , updateTood } = require("./types")

//create a Todo 
app.post("/" , (req , res) => {
    
})

//get all Todos
app.get("/" , (req,res)=> {

})

//mark as done
app.put("/completed" , (req , res) => {
    
})

app.listen(3000 , () => {
    console.log("The server is running on the port 3000")
})

