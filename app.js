const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const { userRoute, colorRoute} = require('./routes');
const { PORT, MONGO_URL} = require('./configs/configs');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/colors', colorRoute);
app.use('/users', userRoute);

// app.listen('4444', ()=>{
//     console.log('App listen 4444');
// });

app.listen(PORT, () =>{
    console.log('App listen', PORT);
    mongoose.connect(MONGO_URL);
});

