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
  actor: any;
  actors: any;

  constructor(
    private backendservice: BackendService,
    private messageservice: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!this.route.toString().includes('actor')) {
      this.searchMovieId(id);
    } else {
      this.searchActorId(id);
    }
  }


  searchMovieId(id) {
    const objKey = 'cast';
    this.backendservice.searchMovieId(id).subscribe(details => this.movie = details);
    this.backendservice.searchCast(id).subscribe(details => this.actors = details[objKey].slice(0, 6));
  }


  searchActorId(id) {
    this.backendservice.searchActorId(id).subscribe(details => this.actor = details);
  }



  goBack() {
    this.location.back();
  }
}
