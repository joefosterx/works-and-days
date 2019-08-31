import { Component } from '@angular/core';
import { Card, CardType } from './card/card-utils' 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  kaos = new Card('https://i.imgur.com/NJOrcHX.jpg', CardType.GOD);
  constructor() {

  }
}
