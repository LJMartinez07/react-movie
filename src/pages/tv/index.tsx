import React from 'react';
import Main from '../../layouts/main';
import { TvListComponent } from '../../components/tv/tv-list';
export default () => {
    const TV_LIST_TYPE = {
        POPULAR: 'popular',
        TOP_RATED: 'top_rated',
        ON_THE_AIR: 'on_the_air',
    };
    return (
        <Main>
            <h1>Popular Tv Shows</h1>
            <TvListComponent type={TV_LIST_TYPE.POPULAR} />
            <h1>On the air Tv Shows</h1>
            <TvListComponent type={TV_LIST_TYPE.ON_THE_AIR} />
        </Main>
    );
};
