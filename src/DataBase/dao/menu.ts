import { db } from '../dbConnection';
import { menu } from '../model/menu';

export const GetAllmenu = async (): Promise<menu[]> => {
  const [rows] = await db.query<menu[]>('SELECT * FROM menu');
  return rows;
};