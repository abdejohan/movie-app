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
  path: any;

  constructor(
    private backendservice: BackendService,
    private messageservice: MessageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.searchMovieId();
    }


  searchMovieId() {
    this.route.params.subscribe(params => { this.path = params.response; });
    console.log(this.path);
    const objKey = 'cast';
    const id = this.route.snapshot.paramMap.get('id');
    this.backendservice.searchMovieId(id).subscribe(details => this.movie = details);
    this.backendservice.searchCast(id).subscribe(details => this.actors = details[objKey].slice(0, 6));
  }


  goBack() {
    this.location.back();
  }
}
