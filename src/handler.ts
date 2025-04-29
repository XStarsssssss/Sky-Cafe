import { Request, Response } from 'express';
import {GetAllFood } from './DataBase/dao/food';

export const homepageGetHandler = (_: Request, res: Response) => {
    res.render('index');
};
export const fooddetailsGetHandler = (_: Request, res: Response) => {
    res.render('food_details');
};


export const FoodGetHandler = async (req: Request, res: Response) => {
    try {
      const food = await GetAllFood();
      res.render('menu', { food }); 
    } 
    catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).send('Internal Server Error');
      }
  };
  
  export const getFoodDetailsHandler = async (req: Request, res: Response): Promise<void> => {
    const { foodName } = req.params;
    try {
        const menu = await GetAllFood(); 
        const menudetails = menu.filter(menu => menu.food_name === foodName);
  
        if (menudetails.length > 0) {
            res.render('food_details', { food_name: foodName, menu: menudetails });
        } else {
            res.status(404).send('food is not found');
        }
    } catch (error) {
        console.error('Error fetching artist details:', error);
        res.status(500).send('Internal server error');
    }
  };
  export const ReviewGetHandler = (_: Request, res: Response) => {
    res.render('reviews');
};
