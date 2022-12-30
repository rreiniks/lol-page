import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ClashComponent } from './clash/clash.component';
import { AramComponent } from './howlingabyss/aram/aram.component';
import { MasteryComponent } from './mastery/mastery.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonersriftComponent } from './summonersrift/summonersrift.component';

const routes: Routes = [
  {path: "rift", component: SummonersriftComponent, canActivate: [AuthGuard]},
  {path: "ARAM", component: AramComponent, canActivate: [AuthGuard]},
  {path: "clash", component: ClashComponent, canActivate: [AuthGuard]},
  {path: "mastery", component: MasteryComponent, canActivate: [AuthGuard]},
  {path: "**", redirectTo: '/summoner'},
  {path: "summoner", component: SummonerComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
