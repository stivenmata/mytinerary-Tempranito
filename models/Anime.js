import { Schema, model } from "mongoose";

let collection = "animes";
let schema = new Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    episodes: { type: Number, required: true },
    rating: { type: Number, required: true, min: 1, max: 10 }
  },
  { timestamps: true }
);

let Anime = model(collection, schema);
export default Anime;
