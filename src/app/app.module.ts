import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClashComponent } from './clash/clash.component';
import { RankedComponent } from './summonersrift/ranked/ranked.component';
import { MasteryComponent } from './mastery/mastery.component';
import { DraftComponent } from './summonersrift/normal/draft/draft.component';
import { AramComponent } from './howlingabyss/aram/aram.component';
import { SummonersriftComponent } from './summonersrift/summonersrift.component';
import { HowlingabyssComponent } from './howlingabyss/howlingabyss.component';
import { BlindComponent } from './summonersrift/normal/blind/blind.component';
import { SummonerComponent } from './summoner/summoner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RiotService } from './shared/riot.service';
import { DatabaseService } from './shared/database.service';
import { SoloComponent } from './summonersrift/ranked/solo/solo.component';
import { FlexComponent } from './summonersrift/ranked/flex/flex.component';
import { NormalComponent } from './summonersrift/normal/normal.component';

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
    SoloComponent,
    FlexComponent,
    NormalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    RiotService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
