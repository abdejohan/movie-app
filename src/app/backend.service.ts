import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpclient: HttpClient) { }


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


  // FUNCTIONS USED BY SEARCH.COMPONENT.TS
  searchMovie(searchInput): Observable<Movie[]> {
    const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380&query=';
    return this.httpclient.get<Movie[]>(searchURL + searchInput);
  }






}
