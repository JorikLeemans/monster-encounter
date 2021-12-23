import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Encounter } from './encounter.model';
import { difficulty } from './encounter.model';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  encounters: Encounter[] = [
    {id: 1, name: 'Encounter1', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: ["henk", "jantje"], monsters: [{id: 1, name: 'Aarakocra', hp: 13, cr: 0.25, movement: [{movementtype: "land", amount: 20},{movementtype: "fly", amount: 50}], creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}}], difficulty: difficulty.easy},
    {id: 2, name: 'Encounter2', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: difficulty.medium},
    {id: 3, name: 'Encounter3', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: difficulty.hard}, 
    {id: 4, name: 'Encounter4', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: difficulty.deadly},
  ];

  constructor() {
    console.log('EncounterService constructor aangeroepen');
  }

  public getEncounterById(id: number): Encounter{
      return this.encounters.filter((encounter) => encounter.id == id)[0];
  }

  public getEncounters(): Encounter[]{
      return this.encounters;
  }

  public addEncounter(encounter: Encounter){
    this.encounters.push(encounter)
  }

  public updateEncounter(encounter: Encounter){
    let old = this.encounters.filter((encounter) => encounter.id == encounter.id)[0];
    let index = this.encounters.indexOf(old);

    this.encounters[index] = encounter; 
  }
}
