import mongo from "mongoose";
import { config } from "dotenv";
import app from "./src/app.js";

config();

const PORT = process.env.PORT || 3000;

const start_app = () => {
    app.listen(PORT, () => {
        console.log(`Listen in port ${PORT}...`);
    });
}
mongo
    .connect(process.env.MONGO_URI)
    .then((db) => {

        if (db.connection.readyState == db.ConnectionStates.connected) {
            if (process.env?.DEVOLPMENT) console.log("DB is connected!");
            start_app();
        }

    }).catch(() => {
        console.error("Something is wrong with DB connection");
    });