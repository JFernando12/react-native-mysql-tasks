import mysql from "mysql2/promise" //Librería que permite promesas de mysql.
import { config } from "./config" //Datos de la conección.

export const connect = async() => {
    return await mysql.createConnection(config);
}
