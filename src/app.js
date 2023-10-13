import express from "express";
import helmet from "helmet";
import cors from "cors";

import apiRoutes from "./api/routes/index.js";

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(helmet());
// Ruta de prueba
app.get("/ping", (req, res) => res.send("Pong!"));
// Rutas de la api
app.use("/api", apiRoutes);

export default app;