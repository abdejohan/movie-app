import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpclient: HttpClient, private messageService: MessageService) { }
  person: any;


  // FUNCTIONS USED BY DISPLAY.COMPONENT.TS
  getTopRated(): Observable<Movie[]> {
    const apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';
    return this.httpclient.get<Movie[]>(apiURL);
  }


  getUpcoming(): Observable<Movie[]> {
    const apiURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';
    return this.httpclient.get<Movie[]>(apiURL);
  }


  getPopular(): Observable<Movie[]> {
    const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';
    return this.httpclient.get<Movie[]>(apiURL);
  }


  // FUNCTION USED BY SEARCH.COMPONENT.TS
  searchMovie(searchInput): Observable<Movie[]> {
    const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380&query=';
    // this.messageService.add('Movie fetched successfully');
    return this.httpclient.get<Movie[]>(searchURL + searchInput);
  }


  // FUNCTION USED BY ACTORSEARCH.COMPONENT.TS
  searchActor(searchInput: string): Observable<Movie[]> {
    const searchActorURL = 'https://api.themoviedb.org/3/search/person?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380&query=';
    // this.messageService.add('Movie fetched successfully');
    return this.httpclient.get<Movie[]>(searchActorURL + searchInput);
  }

  searchMovieId(id): Observable<Movie[]> {
    const movieIdURL = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380&language=en-US';
    return this.httpclient.get<Movie[]>(movieIdURL);
  }

  searchActorId(id): Observable<Movie[]> {
    const ApiActorId = 'https://api.themoviedb.org/3/person/' + id + '?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380&language=en-US';
    return this.httpclient.get<Movie[]>(ApiActorId);
  }





}
