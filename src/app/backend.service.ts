import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Cast } from './cast';


@Injectable({
  providedIn: 'root'
})


export class BackendService {

  constructor(private httpclient: HttpClient, private messageService: MessageService) { }
  cast: Cast;
  actor: any;

  apiLink = 'https://api.themoviedb.org/3/';
  apiKey = 'api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';

  // FUNCTIONS USED BY DISPLAY.COMPONENT.TS
  getTopRated(): Observable<Movie[]> {
      return this.httpclient.get<Movie[]>(this.apiLink + 'movie/top_rated?' + this.apiKey);
  }

  getUpcoming(): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'movie/upcoming?' + this.apiKey);
  }

  getPopular(): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'movie/popular?' + this.apiKey);
  }

  // FUNCTION USED BY SEARCH.COMPONENT.TS
  searchMovie(searchInput): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'search/movie?' + this.apiKey + '&query=' + searchInput);
  }

  // FUNCTION USED BY ACTORSEARCH.COMPONENT.TS
  searchActor(searchInput: string): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'search/person?' + this.apiKey + '&query=' + searchInput);
  }

  searchMovieId(id): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'movie/' + id + '?' + this.apiKey + '&language=en-US');
  }

  searchActorId(id): Observable<Movie[]> {
    return this.httpclient.get<Movie[]>(this.apiLink + 'person/' + id + '?' + this.apiKey + '&language=en-US');
  }

  searchCast(id): Observable<Cast[]> {
    return this.httpclient.get<Cast[]>(this.apiLink + 'movie/' + id + '/credits?' + this.apiKey + '&language=en-US');
  }


}


