import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public movieCategory: any;
  public path: any;

  constructor(
    private httpclient: HttpClient,
    private route: ActivatedRoute,
    private backendservice: BackendService
  ) { }

  ngOnInit(): void {
    this.fetchApiData();
  }

  fetchApiData() {
    this.route.params.subscribe(params => { this.path = params.category; });
    console.log(this.path);
    if (this.path === 'top-rated') {
      this.path = "Top 20 Highest Rated Movies:";
      this.backendservice.getTopRated().subscribe(res => this.movieCategory = res);
    } else if (this.path === 'upcoming') {
      this.path = "Top 20 Upcoming Movies:";
      this.backendservice.getUpcoming().subscribe(res => this.movieCategory = res);
    } else if (this.path === 'popular') {
      this.path = "Top 20 Most Popular Movies:";
      this.backendservice.getPopular().subscribe(res => this.movieCategory = res);
    }
  }







}
