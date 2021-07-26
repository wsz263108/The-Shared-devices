const express=require('express')
const body=require('body-parser')
const router=require('./routers/router')
var app=express()

app.listen(8080)
app.use(express.static('public',{index:false}))
app.use(body.urlencoded({extended:false}))



app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/project/denglu.html')
})
app.use('/user',router)

