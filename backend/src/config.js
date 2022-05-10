import { config as dotenv } from "dotenv"
dotenv(); //Para utilizar variables de entorno.

export const config = {
    host: process.env.DB_HOST, //De esta manera llamo a mis variables de entorno que se encuentran en el archivo .env.
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    socketPath: '/var/run/mysqld/mysqld.sock'
}