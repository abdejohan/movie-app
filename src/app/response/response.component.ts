import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  public path: any;
  public person: any;
  public movie: any;
  public searchInput: any;
  public radioInput: any;


  constructor(
    private backendservice: BackendService,
    private messageservice: MessageService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,

  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => { this.path = params; });
    if (this.router.url.includes("movie")) {
      this.searchMovie(this.path.searchInput);
    } else if (this.router.url.includes("actor")) {
      this.searchActor(this.path.searchInput);
    }
  }



  searchMovie(searchInput: string) {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendservice.searchMovie(searchInput).subscribe(data => this.movie = data);
    } else {
      this.messageservice.add('Oh no, seems like there was an issue with the input. please try again');
    }
  }




  searchActor(searchInput: string): void {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendservice.searchActor(searchInput).subscribe(person => this.person = person);
    } else {
      this.messageservice.add('Oh no, seems like there was an issue with the input. please try again');
    }
  }

  goBack() {
    this.location.back();
  }


}
