
const express=require('express')
const app=express()

app.use(express.static("../"))

app.get("/api/status",(req,res)=>{
res.json({status:"PiOrbit backend running"})
})

const PORT=3000
app.listen(PORT,()=>console.log("Server running"))
