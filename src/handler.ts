import { Request, Response } from 'express';
import {GetAllFood } from './DataBase/dao/food';
import { food } from './DataBase/model/food';
import { db } from './DataBase/dbConnection';

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
  export const getBreakfastMenu = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query<food[]>(`
            SELECT
                f.id AS food_id,
                f.food_name,
                f.food_image,
                f.food_price,
                f.food_topic1,
                f.food_topic2,
                f.food_topic3,
                f.duration,
                f.food_description,
                m.id AS menu_id,
                m.menu AS menu_name,
                mi.id AS menu_item_id
            FROM
                food f
            JOIN
                menuitem mi ON f.id = mi.food_id
            JOIN
                menu m ON mi.menu_id = m.id
                  WHERE m.menu = 'breakfast' 
        `);
        const breakfastFoodItems = rows; 
        res.render('breakfast', { breakfastFoodItems }); 
        } catch (error) {
        console.error("Error fetching breakfast menu:", error);
        res.status(500).send("Internal Server Error"); 
    }
};
        
        

export const getDrinksMenu = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query<food[]>(`
            SELECT
                f.id AS food_id,
                f.food_name,
                f.food_image,
                f.food_price,
                f.food_topic1,
                f.food_topic2,
                f.food_topic3,
                f.duration,
                f.food_description,
                m.id AS menu_id,
                m.menu AS menu_name,
                mi.id AS menu_item_id
            FROM
                food f
            JOIN
                menuitem mi ON f.id = mi.food_id
            JOIN
                menu m ON mi.menu_id = m.id
                  WHERE m.menu = 'drink'
        `);

        const drinkItems = rows;
        res.render('drink', { drinkItems });
    } catch (error) {
        console.error("Error fetching drinks menu:", error);
        res.status(500).send("Internal Server Error");
    }
};
 

  export const ReviewGetHandler = (_: Request, res: Response) => {
    res.render('reviews');
};
