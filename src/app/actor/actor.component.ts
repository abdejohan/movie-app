import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})

export class ActorComponent implements OnInit {
  person: any;
  searchInput: any;

  constructor(
    private backendService: BackendService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }


  searchActor(searchInput: string): void {
    if (searchInput) {
      searchInput = searchInput.replace(' ', '+');
      this.backendService.searchActor(searchInput).subscribe(person => this.person = person);
    } else {
      this.messageService.add('Oh no, seems like there was an issue with the input. please try again');
    }
  }

}
