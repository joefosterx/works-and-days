import { Injectable } from '@angular/core';
import { Card } from '../card/card-utils'

@Injectable()
export class PlayerService {

  constructor() { }
  public cardsInHand: Card[] = [];

}