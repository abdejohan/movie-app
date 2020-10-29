import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DisplayComponent } from './display/display.component';
import { ResponseComponent } from './response/response.component';
import { SearchFormComponent } from './search-form/search-form.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'movie/:searchInput', component: ResponseComponent },
  { path: 'actor/:searchInput', component: ResponseComponent },
  { path: 'c1/:category', component: CategoryComponent },
  { path: 'c2/:category', component: CategoryComponent },
  { path: 'c3/:category', component: CategoryComponent },
  { path: 'movie/id/:id', component: DisplayComponent },
  { path: 'actor/id/:id', component: DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
