import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
// import { ImageSizes } from '../../../http/service/tmovieOptions'
import styles from './tv-card.module.scss';
interface Props {
    tvShow: iTvShow;
}
export const tvCard: React.FC<Props> = (props) => {
    const { tvShow } = props;
    return (
        <Card
            style={{
                marginLeft: '30px',
            }}
            elevation={Elevation.FOUR}
        >
            <div className={styles.card_body}>
                <div>
                    {/* <img className={styles.image} src={`https://image.tmdb.org/t/p/${ImageSizes.SMALL}${tvShow.poster_path}`} alt="" /> */}
                </div>
                <div className={styles.title}>
                    <h3>{tvShow.name}</h3>
                </div>
            </div>
        </Card>
    );
};