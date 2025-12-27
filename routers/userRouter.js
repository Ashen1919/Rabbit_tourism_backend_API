import express from 'express';
import { loginUser } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.post("/login", loginUser);

export default userRoute;