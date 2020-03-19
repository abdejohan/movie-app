import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackendService } from '../backend.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';

  movie: Movie[];

  constructor(private httpclient: HttpClient, private backendservice: BackendService) { }

  ngOnInit(): void {
  }


  // GETS TOP RATED MOVIES FROM API
  getTopRated() {
    this.backendservice.getTopRated().subscribe(data => this.movie = data.results);
    // console.log(this.movies);
  }


  // GETS UPCOMING MOVIES FROM API
  getUpcoming() {
    this.backendservice.getUpcoming().subscribe(data => this.movie = data.results);
  }


  // GETS MOST POPULAR MOVIES FROM API
  getPopular() {
    this.backendservice.getPopular().subscribe(data => this.movie = data.results);
  }



}
