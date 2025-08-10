import mongoose from "mongoose";
const cardSchema=new mongoose.Schema({
    title:String,
    url:String,
    note:String,
    user:String, 
    embedding:[Number],
})
const Card=mongoose.model("Card",cardSchema)
export {Card}