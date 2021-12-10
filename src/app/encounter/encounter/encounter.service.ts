import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Encounter } from './encounter.model';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  encounters: Encounter[] = [
    {id: 1, name: 'Encounter1', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: 0},
    {id: 2, name: 'Encounter2', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: 0},
    {id: 3, name: 'Encounter3', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: 0}, 
    {id: 4, name: 'Encounter4', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: 0},
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
