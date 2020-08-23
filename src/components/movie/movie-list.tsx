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
        flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <Swiper spaceBetween={50} slidesPerView={3} virtual>
            {movieList.map((movie, index) => (
                <SwiperSlide key={index}>
                    <MovieCard movie={movie} ></MovieCard>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}