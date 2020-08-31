import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie/movieCard/movie-card';
import MovieService from '../../http/service/MovieService';
import { ResourceEndpoint } from '../../http/service/tmovieOptions';
interface MovieProps {
    type: string;
}
const service = new MovieService();
export const MovieListComponent: React.FC<MovieProps> = (props) => {
    const [movies, setMovies] = useState([]);
    const [type] = useState(props.type);
    useEffect(() => {
        service.getList(ResourceEndpoint.MOVIES, type).then((res) => {
            setMovies(res.results);
        });
    }, [type]);
    // eslint-disable-next-line
    const wrapper_list = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        overflow: 'auto',
        // flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <div style={wrapper_list}>
            {movies.map((movie, index) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
};
