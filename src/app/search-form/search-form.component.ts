import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
   movie: any;
   searchInput: any;

  constructor(
    private backendservice: BackendService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }


  searchMovie(searchInput: string) {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendservice.searchMovie(searchInput).subscribe(data => this.movie = data);
    } else {
      this.messageService.add('Oh no, seems like there was an issue with the input. please try again');
    }
  }


    // GETS TOP RATED MOVIES FROM API
    getTopRated() {
      this.backendservice.getTopRated().subscribe(data => this.movie = data);
    }

    // GETS UPCOMING MOVIES FROM API
    getUpcoming() {
      this.backendservice.getUpcoming().subscribe(data => this.movie = data);
    }

    // GETS MOST POPULAR MOVIES FROM API
    getPopular() {
      this.backendservice.getPopular().subscribe(data => this.movie = data);
    }


}
