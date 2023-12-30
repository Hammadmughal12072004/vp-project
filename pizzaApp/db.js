const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Gofood:2xdAPjSNiJuqBs1p@cluster0.diuypdy.mongodb.net/mern-pizza'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose