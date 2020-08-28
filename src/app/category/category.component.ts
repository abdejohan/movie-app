import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public movie: any;

  constructor(private httpclient: HttpClient, private backendservice: BackendService) { }

  ngOnInit(): void {
  }

}
