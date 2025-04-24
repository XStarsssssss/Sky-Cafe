import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Masha2007',
  database: 'skycafex',
  waitForConnections: true,
  connectionLimit: 10,
});