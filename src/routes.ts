import { Router } from 'express';
import {homepageGetHandler , menuGetHandler , getFoodDetailsHandler} from './handler';
const router = Router();

router.get('/menu', menuGetHandler);
router.get('/food-details/:foodName', getFoodDetailsHandler);
router.get('/', homepageGetHandler);










export default router;