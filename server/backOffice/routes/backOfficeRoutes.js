import express from 'express';
import render from '../services/render.js';

const backOfficeRoutes = express.Router();

//ejs render
backOfficeRoutes.get('/getAll-messages', render.homeRoutes);
backOfficeRoutes.get('/checked-messages', render.checkedRoutes);
backOfficeRoutes.get('/waiting-response', render.waitingRoutes);

export { backOfficeRoutes };