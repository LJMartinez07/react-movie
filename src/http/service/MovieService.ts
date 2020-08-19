import http from '../http-client'

export default class MovieService{
    async getPopularMovies(){
        try{
            const movies =  await http.get("/movie/popular")
            console.log(movies)
        }catch(e){
            console.log(e)
        }
    }
    async getLatestMovies(){
        try{
            const movies =  await http.get("/movie/latest")
            console.log(movies)
        }catch(e){
            console.log(e)
        }
    }
}