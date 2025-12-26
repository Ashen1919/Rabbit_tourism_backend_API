import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// create express app
const app = express();
app.use(bodyParser.json());

// config CORS
app.use(cors());

// config env
dotenv.config();

// get message
app.get('/', (res) => {
    res.send("Server is running");
});

// config port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});

// database connection
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl).then(() => {
    console.log("Successfully connected to the database");
}).catch(() => {
    console.log("Fail to connect to the database")
});