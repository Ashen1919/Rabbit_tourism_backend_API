import express from 'express';
import { authenticateToken } from '../Middlewares/auth.js';
import { createDestination, deleteDestination, getDestinations, updateDestination } from '../controllers/destinationController.js';

const destinationRoute = express.Router();

destinationRoute.post('/', authenticateToken, createDestination);
destinationRoute.get('/', getDestinations);
destinationRoute.put('/:id', authenticateToken, updateDestination);
destinationRoute.delete('/:id', authenticateToken, deleteDestination);

export default destinationRoute;