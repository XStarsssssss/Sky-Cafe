import { RowDataPacket } from 'mysql2';

export interface food extends RowDataPacket {
id : number;
food_name : string;
food_image : string;
food_price : number;
food_topic1 : string;
food_topic2 : string;
food_topic3 : string;
duration : string;
food_description : string;
};