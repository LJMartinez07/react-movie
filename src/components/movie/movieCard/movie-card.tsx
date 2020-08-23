import React from 'react';
import { Card } from '@blueprintjs/core';
import styles from './movie-card.module.scss'
interface Props{
    movie: iMovieList;
}

export const MovieCard: React.FC<Props> = (props) => {
    const {movie} = props
    return (
        <Card>
            <div className={styles.card_body}>
            <div>
                <img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path} alt="" />
            </div>
            <div className={styles.title} >
                <h3>{movie.title}</h3>
            </div>
            </div>
            
        </Card>
    );
};
