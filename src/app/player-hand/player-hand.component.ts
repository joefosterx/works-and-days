import { Component, OnInit } from '@angular/core';
import { PlayerService} from '../services/player.service'

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit() {
  }

}