
interface Movie {
    title : string;
    director : string;
  }
 
  interface PageTitleProps  {
    title : string;
  }


  interface CinemaProps {
    name : string;
    movie1 : Movie;
    movie2 : Movie;
  }

  
const App = () => {
   const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";


  /*Je pourrais typer les objets pour leur donner le type Movie, comme ceci : 
    const movie1 : Movie = {...}
  */
  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };

  const cinema2Name = "UGC Toison d'Or";

  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  const PageTitle : React.FC<PageTitleProps> = ({title}) => {
    return <h1>{title}</h1>;
  }

  const Cinema : React.FC<CinemaProps> = ({name, movie1, movie2}) => {
    return (
       <div>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>{movie1.title}</strong> - Réalisateur :{" "}
            {movie1.director}
          </li>
          <li>
            <strong>{movie2.title}</strong> - Réalisateur :{" "}
            {movie2.director}
          </li>
        </ul>
      </div>
    )
  }

   
    return (

      <div>
        <PageTitle title = {pageTitle}/>
        <Cinema
          name={cinema1Name}
          movie1={movie1}
          movie2={movie2}
          />

          <Cinema
          name={cinema2Name}
          movie1={movie3}
          movie2={movie4}
          />
        </div>

  )
   
};

export default App;