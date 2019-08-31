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

}