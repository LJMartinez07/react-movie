import React, { useState, useEffect } from "react";
import { ResourceEndpoint } from '../../http/service/tmovieOptions';
import MovieService from '../../http/service/MovieService';
import { tvCard } from './tvCard/tv-card'
const service = new MovieService();
interface TvProps {
    type: string;
}
export const TvListComponent: React.FC<TvProps> = (props) => {
    const [tvShows, setMovieShow] = useState([]);
    const [type] = useState(props.type);
    useEffect(() => {
        service.getList(ResourceEndpoint.TV, type).then((res) => {
            setMovieShow(res.results);
        });
    }, [type]);
    const wrapper_list = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        overflow: 'auto',
        // flexWrap: "wrap",
    } as React.CSSProperties;


    const tvShowsList = tvShows.map((tvShow, index) =>
        <div key={index} >
            <tvCard tvShow={tvShow} />
        </div>
    );

    return (
        <div style={wrapper_list}>
            {tvShowsList}
        </div>
    );
}