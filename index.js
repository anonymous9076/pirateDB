const fs=require('fs');
const express = require("express");
const server=express();
const cors=require('cors')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));

const products=data.products

server.use(cors()
);


server.get('/items',async(req,res)=>{
    let getdata=await products
    res.json(getdata);
});
server.get('/items/id=:id',async(req,res)=>{
    let id =(req.params.id)
    let item=await products.find(p=>p.id==id)
    res.json(item)
});

server.listen(
    8080,()=>{console.log('started')}
);