// require('dotenv').config() // does not work bcz of es6 type module
import dotenv from 'dotenv'
import connectionDb from './db/db_connection.js';
dotenv.config({path: './.env'});

connectionDb();



















/* APPROACH 1. DB connection along with bootstrapping the app that works 100%.

import 'dotenv/config'
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import express from 'express';
const app = express();

;( async () => {

    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
       })



       app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}!`);
       })
    } 
    catch(error){
        console.error("ERROR: ", error);
        throw error
    }


})();

*/