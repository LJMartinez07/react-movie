import http from '../http-client'

export default class MovieService {
    async getList(resource: string, type: string, page: number = 1) {
        try {
            const movies = await http.get(`/${resource}/${type}`, {
                params: {
                    page
                }
            })
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