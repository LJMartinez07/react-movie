import React from 'react';
import { Card } from '@blueprintjs/core';

interface Props{
    movie: iMovieList;
}

export const MovieCard: React.FC<Props> = (props) => {
    const {movie} = props
    return (
        <Card>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} alt="" />
            </div>
            <div>
                <h3>{movie.title}</h3>
            </div>
            <div>
                { movie.genre_ids }
            </div>
        </Card>
    );
};
