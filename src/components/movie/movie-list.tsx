import  React from "react";
import {MovieCard} from "../movie/movie-card";

interface MovieProps  {
    movieList: iMovieList[]
}

export const MovieListComponent: React.FC<MovieProps> = props => {
    const movieList = props.movieList.map((movie, index) =>
        <div key={index}>
            <MovieCard  movie={movie}/>
        </div>
    );
    return (
        <div>
            {movieList}
        </div>
    );
}