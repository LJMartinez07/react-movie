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
    async getKeywords(query: string) {
        try {
            const keyword = await http.get("/search/keyword", {
                params: {
                    query
                }
            })
            console.log(keyword)
        } catch (e) {
            console.log(e)
        }
    }
}