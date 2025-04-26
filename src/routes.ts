import { Router } from 'express';
import {homepageGetHandler , FoodGetHandler, getFoodDetailsHandler} from './handler';
const router = Router();

router.get('/menu', FoodGetHandler);
router.get('/food-details/:foodName', getFoodDetailsHandler);
router.get('/', homepageGetHandler);










export default router;