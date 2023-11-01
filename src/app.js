import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

import WebRoutes from "./web/routes/index.js";
import ApiRoutes from "./api/routes/index.js";

config();

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(helmet());

if (process.env?.DEVOLPMENT) {
    app.use(morgan("dev"))
}

// Ruta de prueba
app.all("/ping", (_, res) => res.send("Pong!"));

app.use("/", WebRoutes);
app.use("/api", ApiRoutes);

export default app;