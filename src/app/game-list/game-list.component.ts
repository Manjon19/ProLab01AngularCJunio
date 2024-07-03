import { Component, HostBinding, HostListener } from '@angular/core';
import { Game } from '../models/game.interface';
import { VIDEOGAMES } from '../models/game.mock';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent {
  gameList:Game[]=VIDEOGAMES;
  bgColor!:string;

}
