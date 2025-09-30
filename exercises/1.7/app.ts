import express from "express";
import filmsRouter from "./routes/films";
import { Request } from "express";




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/films", filmsRouter)




const count2 = new Map<string, number>();

app.use((req, _res, next)=> {

    const key = req.method + " " + req.path ;
    const currentCount = count2.get(key) || 0;
    count2.set(key, currentCount+1);

    console.log("Request counter : ");
    count2.forEach((value, k) => {
        console.log("-" + " " + k + " " + value);
    });

    next();
});




const count = new Map<string, number>();

app.use((req, res, next) =>{

    const key = req.method + " " + req.path;
    const currentCount = count.get(key) ?? 0;
    
    count.set(key, currentCount +1);

    console.log("Request counter : ")
    console.log("- " +  key + " " +currentCount);

    next();
});



export default app;
