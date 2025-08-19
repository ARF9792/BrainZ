import express from "express";
import mongoose from "mongoose";
import { displayc } from "./display_cards.js";
import { create } from "./create.js";
import cors from 'cors';
import queryembed from "./query.js";
import matchembeddings from "./match.js";
import deletecard from "./delete.js";

const app = express();
app.use(cors());
app.use(express.json());

//All the routes except for AI-chat.
app.get("/display-cards", displayc);
app.post("/create-card", create);
app.post("/query-embedding", queryembed);
app.post("/search-cards", matchembeddings);
app.delete("/delete-card/:id", deletecard);

const PORT = process.env.PORT || 4000;
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI).then(() => {
    console.log("Db connected successfully !");
    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    });
}).catch((err) => { 
    console.log("db connection failed !", err);
});
