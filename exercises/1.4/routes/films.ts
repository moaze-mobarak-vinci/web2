import { Router } from "express";
import { films } from "../types";
import { NewFilm } from "../types";

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



filmsRouter.get("/films", (req, res) => {

const minStr = req.query["minimum-duration"];

if(minStr === undefined){
  return res.status(200).json(films);
}

const min = Number(minStr);
if(!Number.isFinite(min) || min < 0){
  return res.status(400).json({error : "minimum-duration must be a positive number"})
}


const result = films.filter(f => f.duration >= min);
return res.status(200).json(result);
});


filmsRouter.get("/films/:id", (req, res) => {

  const id = parseInt(req.params.id);

  if(isNaN(id)) {
    return res.status(400).json({error : "The provided id is not valid."});
  }
  
  const result = films.find(f => f.id === id);
  return res.status(200).json(result);
});


filmsRouter.post("/", (req, res)=> {

  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    !("budget" in body) ||
    !("description" in body) ||
    !("imageUrl" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    typeof body.budget !== "number" ||
    typeof body.description !== "string" ||
    typeof body.imageUrl !== "string" ||
    !body.title.trim() ||
    !body.director.trim() ||
    !body.director.trim()) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;

// Compute the next unique id by scanning the drinks array, 
// finding the highest current id, and adding 1
//"reduce" browse in all the drinks array,
  const nextId =
    films.reduce((maxId, films) => (films.id > maxId ? films.id : maxId), 0) + 1;

  const nFilm: films = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(nFilm);
  return res.json(nFilm);
});









export default filmsRouter;