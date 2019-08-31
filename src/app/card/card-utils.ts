
export class Card {
  constructor(readonly imageFront: string, readonly cardType: CardType){

  }
  get description(): string {
    return `Type: ${this.cardType}`
  }
}

export enum CardType {
  GOD = 'God',
  MAN = 'Man',
  REGION = 'Region',
  CITY = 'City',
  ITEM = 'Item',
  MONSTER = 'Monster',
}