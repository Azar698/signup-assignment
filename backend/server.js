// init express mysql cors
const express = require('express') 
const mySql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()) // middleware

const db = mySql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database: "signup"
})


// signup api

app.post('/signup',(req,res)=>{
    const sqlQuery = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password

    ]
    db.query(sqlQuery,[values],(err,data)=>{
        if(err){
            return res.json({ error: err.message })
        }
        return res.json(data)
    })
})

// login api 

app.post('/login',(req,res)=>{
    const sqlQuery = "SELECT * FROM LOGIN WHERE `email` = ? AND `password` = ?"
    const values = [
        req.body.email,
        req.body.password
    ]

    db.query(sqlQuery, values, (err, data) => { // Corrected this line
        if(err){
            return res.json({ error: err.message })
        }
        if(data.length > 0) {
            return res.json("success")
        }else{
            return res.json("failed")
        }
    })
})

app.listen(8081,()=>{
    console.log("Server Listening")
})





