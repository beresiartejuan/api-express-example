import mongo from "mongoose";
import { config } from "dotenv";
import app from "./src/app.js";
import morgan from "morgan";

config();

const PORT = process.env.PORT || 3000;

if (process.env?.DEVOLPMENT) {
    app.use(morgan("dev"))
}

const start_app = () => {
    app.listen(PORT, () => {
        console.log(`Listen in port ${PORT}...`);
    });
}
mongo
    .connect(process.env.MONGO_URI)
    .then((db) => {

        if (db.connection.readyState == db.ConnectionStates.connected) {
            console.log("DB is connected!");
            start_app();
        }

    }).catch(() => {
        console.log("Something is wrong with DB connection");
    });