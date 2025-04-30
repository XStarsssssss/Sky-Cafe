import { Router } from 'express';
import {homepageGetHandler , FoodGetHandler, getFoodDetailsHandler, ReviewGetHandler,getBreakfastMenu,getDrinksMenu,getLunchMenu,getDinnerMenu,getDessertMenu} from './handler';
const router = Router();

router.get('/menu', FoodGetHandler);
router.get('/food-details/:foodName', getFoodDetailsHandler);
router.get('/breakfast' ,getBreakfastMenu);
router.get('/lunch' ,getLunchMenu);
router.get('/dinner' ,getDinnerMenu);
router.get('/drink' ,getDrinksMenu);
router.get('/dessert' ,getDessertMenu);
router.get('/review', ReviewGetHandler);
router.get('/', homepageGetHandler);










export default router;