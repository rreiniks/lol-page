import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClashComponent } from './clash/clash.component';
import { RankedComponent } from './summonersrift/ranked/ranked.component';
import { MasteryComponent } from './mastery/mastery.component';
import { DraftComponent } from './summonersrift/draft/draft.component';
import { AramComponent } from './howlingabyss/aram/aram.component';
import { SummonersriftComponent } from './summonersrift/summonersrift.component';
import { HowlingabyssComponent } from './howlingabyss/howlingabyss.component';
import { BlindComponent } from './summonersrift/blind/blind.component';
import { SummonerComponent } from './summoner/summoner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClashComponent,
    RankedComponent,
    MasteryComponent,
    DraftComponent,
    AramComponent,
    SummonersriftComponent,
    HowlingabyssComponent,
    BlindComponent,
    SummonerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
