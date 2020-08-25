import React from "react";
import { MovieCard } from "../movie/movieCard/movie-card";
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
// install Virtual module
// SwiperCore.use([Virtual]);

interface MovieProps {
    movieList: iMovieList[]
}
SwiperCore.use([Virtual])


export const MovieListComponent: React.FC<MovieProps> = props => {
    const movieList = props.movieList;
    // eslint-disable-next-line
    const wrapper = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        overflow: "auto"
        // flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <div style={wrapper}>
            {movieList.map((movie, index) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
}