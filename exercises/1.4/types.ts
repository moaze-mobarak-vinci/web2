export interface films {
    id : number;
    title : string;
    director : string;
    duration: number; //Always positive
    budget?: number;  //Always positive
    description?: string; 
    imageUrl ?: string; //An url
}

type NewFilm = Omit<films, "id">;

export type  {NewFilm};
