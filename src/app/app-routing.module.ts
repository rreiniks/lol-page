import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummonerComponent } from './summoner/summoner.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: '/summoner'},
  {path: "summoner", component: SummonerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
