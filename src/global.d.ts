declare global{
    interface iRouterViewProps{
        location?: any;
        beforeEnter?: (path:string) => void
    }

    interface iMovieList{
        adult: boolean;
        overview: string;
        release_date: string;
        genre_ids: number[];
        id: number;
        original_title: string;
        original_language: string;
        title: string;
        backdrop_path: string;
        popularity: number;
        vote_count: number;
        video: boolean;
        vote_average: number;
    }
}
export { };