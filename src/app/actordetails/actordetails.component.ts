import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.css']
})


export class ActordetailsComponent implements OnInit {
  person: any;

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  searchActorId() {
    const id = this.route.snapshot.paramMap.get('id');
    this.backendService.searchActorId(id).subscribe(details => this.person = details);
  }

  goBack() {
    this.location.back();
  }
}
