import express from 'express';
import { authenticateToken } from '../Middlewares/auth.js';
import { createTourDetails, getAllTourDetails, getTourDetailsById, updateTourDetails } from '../controllers/tourDetailsController.js';

const tourDetailsRoute = express.Router();

tourDetailsRoute.post('/', authenticateToken, createTourDetails);
tourDetailsRoute.get('/', getAllTourDetails);
tourDetailsRoute.put('/:id', authenticateToken, updateTourDetails);
tourDetailsRoute.get('/:id', getTourDetailsById);

export default tourDetailsRoute;