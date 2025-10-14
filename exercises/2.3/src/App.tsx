
import { Cinema } from "./components/Cinema/Cinema";
import { PageTitle } from "./components/PageTitle/PageTitle"; 

const App = () => {
   const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";


  /*Je pourrais typer les objets pour leur donner le type Movie, comme ceci : 
    const movie1 : Movie = {...}
  */
  const moviesCinema1 = [{
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  }, 
  {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
{
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

    return (

      <div>
        <PageTitle title = {pageTitle}/>
        <Cinema name={cinema1Name} movie1={moviesCinema1[0]} movie2={moviesCinema1[1]} />
          

          <Cinema name={cinema2Name} movie1={moviesCinema2[0]} movie2 = {moviesCinema2[1]}/>
        </div> 
  );
   
};

export default App;