import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClashComponent } from './clash/clash.component';
import { AramComponent } from './howlingabyss/aram/aram.component';
import { MasteryComponent } from './mastery/mastery.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonersriftComponent } from './summonersrift/summonersrift.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: '/summoner'},
  {path: "summoner", component: SummonerComponent},
  {path: "rift", component: SummonersriftComponent},
  {path: "ARAM", component: AramComponent},
  {path: "clash", component: ClashComponent},
  {path: "mastery", component: MasteryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
