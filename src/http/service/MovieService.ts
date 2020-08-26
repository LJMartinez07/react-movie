import http from '../http-client'

export default class MovieService {
    async getMovies(type: string) {
        try {
            const movies = await http.get(`/movie/${type}`)
            return movies.data
        } catch (e) {
            console.log(e)
        }
    }
    async getLatestMovies() {
        try {
            const movies = await http.get("/movie/latest")
            console.log(movies)
        } catch (e) {
            console.log(e)
        }
    }
}