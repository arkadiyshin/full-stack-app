import mysql from 'mysql';
import { } from 'dotenv/config';

console.log(process.env.DB_USER);
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

export default connection;