import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { ActorsearchComponent } from './actorsearch/actorsearch.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { ActordetailsComponent } from './actordetails/actordetails.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    MessagesComponent,
    ActorsearchComponent,
    DetailsComponent,
    ActordetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
