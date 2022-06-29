const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const userRoutes = require('./routes/user.js')


const app = express();

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT ||  3001 ;



//midleweare
app.use(express.json());
app.use('/api', userRoutes);


//router
app.get('/', (req, res) =>{
    res.send("hello world!");
})


//mongo db conections

mongoose.connect(process.env.DB_URI)
        .then(()=>{console.log("connect tho atlas")})
        .catch((err)=>{console.log(`no connect > ${err}`)});


        
/**end connection of mongoose athlas */
app.listen(port, host, ()=>{
    console.log(`http://localhost:${port} and host ${host}`);
})


