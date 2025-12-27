import express from 'express';
import { createDestinationDetails, getAllDestinationDetails, getDestinationDetailsById, updateDestinationDetails } from '../controllers/destinationDetailsController.js';
import { authenticateToken } from '../Middlewares/auth.js';

const destinationDetails = express.Router();

destinationDetails.post('/',authenticateToken, createDestinationDetails);
destinationDetails.get('/', getAllDestinationDetails);
destinationDetails.get('/:id', getDestinationDetailsById);
destinationDetails.put('/:id', authenticateToken, updateDestinationDetails);

export default destinationDetails;