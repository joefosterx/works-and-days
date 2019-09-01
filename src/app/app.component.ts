import { Component } from '@angular/core';
import { Card, CardType } from './card/card-utils';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [PlayerService],
})
export class AppComponent  {
  name = 'Angular';
  kaos = new Card('https://i.imgur.com/NJOrcHX.jpg', CardType.GOD);
  constructor() {

  }
}
