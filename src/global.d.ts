declare global {
    interface iRouterViewProps {
        location?: any;
        beforeEnter?: (path: string) => void
    }

    interface iMovie {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: String;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    interface iTvShow {
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_name: string;
        name: string;
        overview: string;
        popularity: number;
        poster_path: String;
        vote_average: number;
        vote_count: number;
    }


}
export { };