const express = require('express')
const app =express()

app.listen(3000)

app.get('/',(req ,res)=>
    {
        console.log("Chalu che");
        res.send("kem bhai maja");
    })