import { Component, OnInit, Input } from '@angular/core';
import { Card} from './card-utils'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() card: Card;

  ngOnInit() {
  }
  public tapThat() {
    console.log("Tapped!");
    this.forceHeight = this.forceHeight + 100;
    this.forceWidth = this.forceWidth + 70;
  }
  public forceHeight: number = 0;
  public forceWidth: number = 0;

}