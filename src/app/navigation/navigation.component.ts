import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    movie: any;

  constructor(
    private backendservice: BackendService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

}
