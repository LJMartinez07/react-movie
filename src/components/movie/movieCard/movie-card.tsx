import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import styles from './movie-card.module.scss';
interface Props {
    movie: iMovieList;
}

export const MovieCard: React.FC<Props> = (props) => {
    const { movie } = props;
    return (
        <Card
            style={{
                marginLeft: '30px',
                width: '200px',
                minWidth: '200px;',
            }}
            elevation={Elevation.FOUR}
        >
            <div className={styles.card_body}>
                <div className={styles.image}>
                    <div className="wrapper">
                        <a className={styles.image} href="/movie">
                            <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path} alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.title}>
                    <h3>{movie.title}</h3>
                </div>
            </div>
        </Card>
    );
};
