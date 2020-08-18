declare global{
    interface iRouterViewProps{
        location?: any;
        beforeEnter?: (path:string) => void
    }
}
export { };