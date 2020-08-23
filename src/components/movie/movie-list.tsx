import  React from "react";
import {MovieCard} from "../movie/movieCard/movie-card";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
interface MovieProps  {
    movieList: iMovieList[]
}



export const MovieListComponent: React.FC<MovieProps> = props => {
    const movieList = props.movieList.map((movie, index) =>
        <SwiperSlide key={index}>
            <MovieCard  movie={movie}/>
        </SwiperSlide>
    );
     const wrapper  = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
    } as React.CSSProperties;
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       {movieList}
      </Swiper>
    );
}