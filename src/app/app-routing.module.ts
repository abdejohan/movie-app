import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ActorComponent } from './actor/actor.component';
import { DisplayComponent } from './display/display.component';
import { ResponseComponent } from './response/response.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'actor', component: ActorComponent },
  { path: 'c1/:category', component: CategoryComponent },
  { path: 'c2/:category', component: CategoryComponent },
  { path: 'c3/:category', component: CategoryComponent },
  { path: ':id', component: DisplayComponent },
  { path: 'person/:id', component: DisplayComponent },
  { path: 'actor/:actor', component: ResponseComponent },
  { path: 'movie/:movie', component: ResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
