import express from 'express';
import { authenticateToken } from '../Middlewares/auth.js';
import { createGalleryItem, deleteGalleryItem, getAllGalleryItems, updateGalleryItem } from '../controllers/galleryController.js';

const galleryRouter = express.Router();

galleryRouter.post('/', authenticateToken, createGalleryItem);
galleryRouter.get('/', getAllGalleryItems);
galleryRouter.put('/:id', authenticateToken, updateGalleryItem);
galleryRouter.delete('/:id', authenticateToken, deleteGalleryItem);

export default galleryRouter;