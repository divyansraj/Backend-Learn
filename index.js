const express= require('express')
var format = require("date-format")
const app = express()

const PORT = 4000 || process.env.PORT

app.get('/',(req,res)=>{
    res.status(400).send(`<h1>HELLO BHAIYON KAISE HO</h1>`)
})

app.get('/api/v1/instagram',(req,res)=>{
    res.status(200).json({
        username:"Divyanshww",
        followers:"89",
        following:"120",
        date: format.asString(format.DATETIME_FORMAT,new Date()),
    })
})
app.get('/api/v1/facebook',(req,res)=>{
    res.status(200).json({
        username:"Divyansh",
        followers:"40",
        following:"150",
        date: format.asString(format.DATETIME_FORMAT,new Date()),
    })
})
app.get('/api/v1/linkedin',(req,res)=>{
    res.status(200).json({
        username:"Divyanshu Kumar",
        followers:"1000",
        following:"1000",
        date: format.asString(format.DATETIME_FORMAT,new Date()),
    })
})

app.get('/api/v1/:id',(req,res)=>{
    console.log(req.params);
    res.status(200).json({
        params: req.params.id,
    })
})
app.listen(PORT,() =>{
    console.log(`PORT is running on ${PORT}`)
})