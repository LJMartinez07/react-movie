declare global{
    interface iRouterViewProps{
        location?: any;
        beforeEnter?: (path:string) => void
    }

    interface iMovieCardProps{
        movie?: Object
    }
}
export { };