import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import { ImageSizes } from '../../../http/service/tmovieOptions';
import styles from './tv-card.module.scss';
import { Link } from 'react-router-dom';
interface Props {
    tvshow: iTvShow;
}
export const TvCard: React.FC<Props> = (props) => {
    const { tvshow } = props;
    return (
        <Card
            style={{
                marginLeft: '30px',
            }}
            elevation={Elevation.FOUR}
        >
            <Link to={`/tv/${tvshow.id}`}>
                <div className={styles.card_body}>
                    <div>
                        <img
                            className={styles.image}
                            src={`https://image.tmdb.org/t/p/${ImageSizes.SMALL}${tvshow.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className={styles.title}>
                        <h3>{tvshow.name}</h3>
                    </div>
                </div>
            </Link>
        </Card>
    );
};
