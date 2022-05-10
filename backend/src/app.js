import express from "express";
import taskRoutes from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";
import { options } from "./swaggerOptions"

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

const specs = swaggerJsdoc(options)

const app = express();

app.use(cors()); //Para poder aceptar conexión con cualquier base de datos.
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);

app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs))

export default app;