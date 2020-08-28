import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';


const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'actor', component: ActorComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'category/:category', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
