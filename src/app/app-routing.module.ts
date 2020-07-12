import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos/repos.component';
import { ReposSavedComponent } from './components/repos/repos-saved/repos-saved.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'repos/:login', component: ReposComponent },
  { path: 'saved', component: ReposSavedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
