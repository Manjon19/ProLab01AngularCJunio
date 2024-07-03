import { Component, Input } from '@angular/core';
import { Game } from '../models/game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  @Input() game?:Game;
}
