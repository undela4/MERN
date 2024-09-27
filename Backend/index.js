const express= require('express');
const app= express();

app.use(express.json());//body parsing
const cors=require('cors');

app.use(cors(
    {
        origin:"*",
    }
));

require('dotenv').config()

const expressfile=require('express-fileupload');


app.use(expressfile());


const router=require('./routes.js');
app.use('/dealsdray',router);

const MongooDB=require("./Configurations/mongoDb.js")
MongooDB();

const {firebase} = require("./Configurations/firebase.js")
firebase();



app.listen(5000,()=>{console.log(`listening on port::${5000}....`)});