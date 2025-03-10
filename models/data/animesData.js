import "dotenv/config.js";
import "../../config/database.js";
import Anime from "../Anime.js";

let animes = [
  { title: "Attack on Titan", genre: "Action", episodes: 75, rating: 9.5 },
  { title: "Naruto", genre: "Adventure", episodes: 220, rating: 8.7 },
  { title: "One Piece", genre: "Adventure", episodes: 1000, rating: 9.0 },
  { title: "Death Note", genre: "Thriller", episodes: 37, rating: 9.3 },
  { title: "Demon Slayer", genre: "Action", episodes: 26, rating: 9.0 }
];

Anime.insertMany(animes);
