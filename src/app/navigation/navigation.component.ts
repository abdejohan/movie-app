import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    movie: any;

  constructor(
    private backendservice: BackendService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
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
