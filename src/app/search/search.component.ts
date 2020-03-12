import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getMovie(searchInput) {
    console.log(searchInput);
    return searchInput;
  }


}
