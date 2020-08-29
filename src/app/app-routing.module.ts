import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { DisplayComponent } from './display/display.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'actor', component: ActorComponent },
  { path: 'c1/:category', component: CategoryComponent },
  { path: 'c2/:category', component: CategoryComponent },
  { path: 'c3/:category', component: CategoryComponent },
  { path: ':id', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
