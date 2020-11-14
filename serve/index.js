const express = require('express')
const app = express()
// app.get('/add',()=>{

// })
app.get('/addsync',(req,res)=>{
    res.json({
        ok:1
    })
})
app.get('/user',(req,res)=>{
    res.json({
        user:'初念'
    })
})

app.get('/username',(req,res)=>{
    res.json({
        name:'15640518366'
    })
})

app.listen(5000,()=>{
    console.log('启动成功');
    
})