import { Router } from 'express';
import {homepageGetHandler , FoodGetHandler, getFoodDetailsHandler, ReviewGetHandler,getBreakfastMenu,getDrinksMenu} from './handler';
const router = Router();

router.get('/menu', FoodGetHandler);
router.get('/food-details/:foodName', getFoodDetailsHandler);
router.get('/breakfast' ,getBreakfastMenu);
router.get('/drink' ,getDrinksMenu);
router.get('/review', ReviewGetHandler);
router.get('/', homepageGetHandler);










export default router;