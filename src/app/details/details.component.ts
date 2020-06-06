import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../backend.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private location: Location
  ) { }

  ngOnInit() {
    this.searchMovieId();
  }

  searchMovieId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.backendService.searchMovieId(id).subscribe(details => this.movie = details);
  }

  goBack() {
    this.location.back();
  }

}
