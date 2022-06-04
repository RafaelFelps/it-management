import { ExampleController } from '../controllers/example.controller';

import { Router } from "express";


const exampleRoutes = Router();

// Routes
exampleRoutes.use('/', ExampleController);


export { exampleRoutes };