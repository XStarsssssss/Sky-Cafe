
import { db } from '../dbConnection';
import { food } from '../model/food';

export const GetAllFood = async (): Promise<food[]> => {
  const [rows] = await db.query<food[]>('SELECT * FROM food');
  return rows;
};
