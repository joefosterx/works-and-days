import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { PlayerService } from './services/player.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardComponent, PlayerHandComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PlayerService]
})
export class AppModule { }
