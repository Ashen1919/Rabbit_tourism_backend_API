import express from 'express';
import { createTour, deleteTour, getAllTours, updateTour } from '../controllers/tourController.js';
import { authenticateToken } from '../Middlewares/auth.js';

const tourRoute = express.Router();

tourRoute.post('/',authenticateToken , createTour);
tourRoute.get('/', getAllTours);
tourRoute.put('/:id', authenticateToken, updateTour);
tourRoute.delete('/:id', authenticateToken, deleteTour);

export default tourRoute;