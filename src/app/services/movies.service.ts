import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = 'https://api.themoviedb.org/3/movie';
    keyApi: string = 'api_key=8c247ea0b4b56ed2ff7d41c9a833aa77';

    constructor(private httpClt: HttpClient) {
        console.log('create service movies');
    }

    getMovies(typeReq: string = 'upcoming') {
        return this.httpClt.get(
            this.baseUrl + '/' + typeReq + '?' + this.keyApi
        );
    }
}
