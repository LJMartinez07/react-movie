import  React from "react";
import {MovieCard} from "../movie/movieCard/movie-card";


interface MovieProps  {
    movieList: iMovieList[]
}



export const MovieListComponent: React.FC<MovieProps> = props => {
    const movieList = props.movieList.map((movie, index) =>
        <div key={index}>
            <MovieCard  movie={movie}/>
        </div>
    );
     const wrapper  = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <div >
            {movieList}
        </div>
    );
}