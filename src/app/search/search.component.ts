import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Observable, of } from 'rxjs';
import { BackendService } from '../backend.service';

import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movie: Movie;

  searchInput;
  public result = [];

  constructor(private backendservice: BackendService) { }

  ngOnInit(): void {
  }

  searchMovie(searchInput: string) {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendservice.searchMovie(searchInput).subscribe(data => this.movie = data.results);
      console.log(this.movie);
    } else {
      Message('requires valid input.');
    }
  }

}
