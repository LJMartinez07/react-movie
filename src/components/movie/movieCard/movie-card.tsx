import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ImageSizes } from '../../../http/service/tmovieOptions';
import styles from './movie-card.module.scss';
import { useHistory } from 'react-router-dom';
interface Props {
    movie: iMovie;
}
export const MovieCard: React.FC<Props> = (props) => {
    const { movie } = props;
    let history = useHistory();
    const handleClick = () => {
        history.push('movie');
    };
    return (
        <Card
            style={{
                marginLeft: '30px',
            }}
            elevation={Elevation.FOUR}
            onClick={handleClick}
        >
            <div className={styles.card_body}>
                <div>
                    <img
                        className={styles.image}
                        src={`https://image.tmdb.org/t/p/${ImageSizes.SMALL}${movie.poster_path}`}
                        alt=""
                    />
                </div>
                <div className={styles.title}>
                    <h3>{movie.title}</h3>
                </div>
            </div>
        </Card>
    );
};
