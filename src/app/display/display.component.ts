import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Movie } from '../movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  apiURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9c8b1e24fdb5fd66ee5afc26bb9da380';

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }


  getTopRated() {
    console.log('top rated');
  }

  getUpcoming() {
    console.log('upcoming');
  }



  getPopular() {
    console.log('popular');
  }




}
