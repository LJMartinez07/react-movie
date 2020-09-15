import http from '../http-client';
// import { AxiosResponse } from 'axios';

export default class MovieService {
    async getList(resource: string, type: string, page: number = 1) {
        try {
            const movies = await http.get(`/${resource}/${type}`, {
                params: {
                    page,
                },
            });
            return movies.data;
        } catch (e) {
            console.log(e);
        }
    }
    async search(type: string, query: string) {
        try {
            const keyword = await http.get(`/search/${type}`, {
                params: {
                    query,
                },
            });
            return keyword.data;
        } catch (e) {
            console.log(e);
        }
    }
}
