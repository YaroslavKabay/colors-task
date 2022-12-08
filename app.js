const express = require('express');
const mongoose = require('mongoose');

const { userRoute, colorRoute} = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/colors', colorRoute);
app.use('/users', userRoute);

app.listen('4444', ()=>{
    console.log('App listen 4444');
});

