
interface Movie {
    title : string;
    director : string;
  }

 interface CinemaProps {
    name : string;
    movie1 : Movie;
    movie2 : Movie;
  }

export function Cinema ({name, movie1, movie2} : CinemaProps){
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
    );
  }