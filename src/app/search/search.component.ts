import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Observable, of } from 'rxjs';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';

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
  message: string;
  person: any;

  searchInput;
  public result = [];

  constructor(private backendService: BackendService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  searchMovie(searchInput: string) {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendService.searchMovie(searchInput).subscribe(data => this.movie = data.results);
      console.log(this.movie);
    } else {
      this.messageService.add('Oh no, seems like there was an issue with the input. please try again');
    }
  }


}
