import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  movie: any;
  actors: any;
  person: any;

  constructor(
    private backendservice: BackendService,
    private messageservice: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!this.route.toString().includes('person')) {
      this.searchMovieId(id);
      console.log('movie');
    } else {
      console.log('actor');
      this.searchActorId(id);
    }
  }


  searchMovieId(id) {
    const objKey = 'cast';
    this.backendservice.searchMovieId(id).subscribe(details => this.movie = details);
    this.backendservice.searchCast(id).subscribe(details => this.actors = details[objKey].slice(0, 6));
  }


  searchActorId(id) {
    console.log('came this far');
    this.backendservice.searchActorId(id).subscribe(details => this.person = details);
  }



  goBack() {
    this.location.back();
  }
}
