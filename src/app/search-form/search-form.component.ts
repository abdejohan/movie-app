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
   radioInput: any;
   radio: any;

   
  constructor(
    private backendservice: BackendService,
    private messageService: MessageService
    ) { }
    
    ngOnInit() {
      this.radioInput = "movie";
  }



}
  