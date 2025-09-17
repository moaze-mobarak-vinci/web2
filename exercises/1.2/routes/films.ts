import { Router } from "express";
import { films } from "../types";

const filmsRouter = Router();

const films: films[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160, // millions
    description: "A mind-bending thriller about dreams within dreams.",
    imageUrl: "https://m.media-amazon.com/images/I/51oDhpwVZDL._AC_.jpg",
  },
  {
    id: 2,
    title: "The Matrix",
    director: "The Wachowskis",
    duration: 136,
    budget: 63,
    description: "A hacker discovers the truth about his reality.",
    imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    budget: 165,
    description: "Explorers travel through a wormhole in space.",
    imageUrl: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
  },
];

filmsRouter.get("/", (_req, res) => {
  return res.json(films);
});

export default filmsRouter;