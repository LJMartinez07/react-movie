import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie/movieCard/movie-card";

import MovieService from '../../http/service/MovieService';
interface MovieProps {
    KIND: string
}
const service = new MovieService();
export const MovieListComponent: React.FC<MovieProps> = props => {
    const [movies, setMovies] = useState([]);
    const [kind] = useState(props.KIND)
    useEffect(() => {
        service.getMovies(kind).then((res) => {
            setMovies(res.results);
        });
    }, [kind]);

    // eslint-disable-next-line
    const wrapper = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        overflow: "auto"
        // flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <div style={wrapper}>
            {movies.map((movie, index) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
}