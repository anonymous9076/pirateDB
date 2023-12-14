const express = require("express");
const server=express();
const cors=require('cors')
const mongoose=require('mongoose')
const router= require('./Routes/product.js')


database().catch(()=>console.log('error = '))
async function database(){
    await mongoose.connect('mongodb+srv://tushar915:tushar1292@cluster0.ihjuf05.mongodb.net/pirate');
    console.log('database started');
}

server.use(cors());
server.use('/',router)


server.listen(
    8080,()=>{console.log('started')}
);