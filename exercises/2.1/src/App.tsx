




const App = () => {
   const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";



  interface PageTitleProps  {
    title : string;
  }

  const PageTitle : React.FC<PageTitleProps> = ({title}) => {
    return <h1>{title}</h1>;
  }

  interface Cinema1Props {
    name : string;
    movie1Title : string;
    movie1Director : string;
    movie2Title : string;
    movie2Director : string;
  }

  
  const Cinema1 : React.FC<Cinema1Props> = ({name, movie1Title, movie1Director, movie2Title, movie2Director}) => {
    return (
       <div>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>{movie1Title}</strong> - Réalisateur :{" "}
            {movie1Director}
          </li>
          <li>
            <strong>{movie2Title}</strong> - Réalisateur :{" "}
            {movie2Director}
          </li>
        </ul>
      </div>
    )
  }

  interface Cinema2Props {
    name : string;
    movie1Title : string;
    movie1Director : string;
    movie2Title : string;
    movie2Director : string;
  }

   const Cinema2 : React.FC<Cinema2Props> = ({name, movie1Title, movie1Director, movie2Title, movie2Director}) => {

    return (

      <div>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>{movie1Title}</strong> - Réalisateur :{" "}
            {movie1Director}
          </li>
          <li>
            <strong>{movie2Title}</strong> - Réalisateur :{" "}
            {movie2Director}
          </li>
        </ul>
      </div>

  )
   }
  return (
    <div>
      <PageTitle title = {pageTitle}/>
      <Cinema1
        name= {cinema1Name}
        movie1Title={cinema1Movie1Title}
        movie1Director={cinema1Movie1Director}
        movie2Title={cinema1Movie2Title}
        movie2Director={cinema1Movie2Director}
      />
      <Cinema2
      name= {cinema2Name}
        movie1Title={cinema2Movie1Title}
        movie1Director={cinema2Movie1Director}
        movie2Title={cinema2Movie2Title}
        movie2Director={cinema2Movie2Director}
      />
     </div>
  )
};

export default App;