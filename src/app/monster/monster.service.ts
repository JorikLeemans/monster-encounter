import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Monster } from './monster.model';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  monsters: Monster[] = [
    {id: 1, name: 'Aarakocra', hp: 13, cr: 0.25, movement: [{movementtype: "land", amount: 20},{movementtype: "fly", amount: 50}]},
    {id: 2, name: 'Aboleth', hp: 135, cr: 10, movement: [{movementtype: "land", amount: 20},{movementtype: "swim", amount: 40}]},
    {id: 3, name: 'Abominable Yeti', hp: 137, cr: 9, movement: [{movementtype: "land", amount: 40},{movementtype: "climb", amount: 40}]},
    {id: 4, name: 'Acolyte', hp: 9, cr: 0.25, movement: [{movementtype: "land", amount: 30}]},  
    {id: 5, name: 'Adult Black Dragon', hp: 195, cr: 14, movement: [{movementtype: "land", amount: 40},{movementtype: "fly", amount: 80},{movementtype: "swim", amount: 40}]},  
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  public getMonsterById(id: number): Monster{
      return this.monsters.filter((monster) => monster.id == id)[0];
  }

  public getMonsters(): Monster[]{
      return this.monsters;
  }

  public addMonster(monster: Monster){
    this.monsters.push(monster)
  }

  public updateMonster(monster: Monster){
    let old = this.monsters.filter((monster) => monster.id == monster.id)[0];
    let index = this.monsters.indexOf(old);

    this.monsters[index] = monster; 
  }
}
