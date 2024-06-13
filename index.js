const express = require('express');

const app = express();
const {APP_PORT , DB_URL}=require("./config")
const routes=require('./routes')

const mongoose = require("mongoose");

var bodyParser = require('body-parser')

app.use(express.static(__dirname + "/public"));  //to make photo public
app.use("/uploads",express.static("uploads"));    //to make photo public
app.use(
    bodyParser.urlencoded({ 
        extended: true,  
     })
    );


app.use(bodyParser.json())

 

mongoose.connect(DB_URL)
.then(() => console.log('Connected!'));
// mongoose.connect('mongodb://127.0.0.1:27017/test')

app.use(routes)



app.listen(APP_PORT,()=>{
    console.log(`app ${APP_PORT}`)
})