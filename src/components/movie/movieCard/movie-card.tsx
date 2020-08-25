import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import styles from './movie-card.module.scss'
interface Props {
    movie: iMovieList;
}

export const MovieCard: React.FC<Props> = (props) => {
    const { movie } = props
    return (
        <Card elevation={Elevation.FOUR}>
            <div className={styles.card_body}>
                <div className={styles.image}>
                    <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path} alt="" />

                </div>
                <div className={styles.title} >
                    <h3>{movie.title}</h3>
                </div>
            </div>

        </Card>
    );
};
