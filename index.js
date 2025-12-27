import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routers/userRouter.js';
import destinationRoute from './routers/destinationRouter.js';
import destinationDetails from './routers/destinationDetailsRouter.js';
import tourRoute from './routers/tourRouter.js';
import tourDetailsRoute from './routers/tourDetailsRouter.js';
import galleryRouter from './routers/galleryRouter.js';

// create express app
const app = express();
app.use(bodyParser.json());

// config CORS
app.use(cors());

// config env
dotenv.config();

// get message
app.get('/', (req,res) => {
    res.send("Server is running");
});

// route configuration
app.use('/api/Auth/user', userRoute);
app.use('/api/destinations', destinationRoute);
app.use('/api/destination-details', destinationDetails);
app.use('/api/tour', tourRoute);
app.use('/api/tour-details', tourDetailsRoute);
app.use('/api/gallery', galleryRouter);

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