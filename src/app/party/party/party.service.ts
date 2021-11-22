import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Party } from './party.model';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  parties: Party[] = [
    {id: 1, name: 'Party1', size:0, campaign:'Campaign1', users: []},
    {id: 2, name: 'Party2', size:0, campaign:'Campaign1', users: []},
    {id: 3, name: 'Party3', size:0, campaign:'Campaign1', users: []},
    {id: 4, name: 'Party4', size:0, campaign:'Campaign1', users: []},
    {id: 5, name: 'Party5', size:0, campaign:'Campaign1', users: []},  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  public getPartyById(id: number): Party{
      return this.parties.filter((party) => party.id == id)[0];
  }

  public getParties(): Party[]{
      return this.parties;
  }

  public addParty(party: Party){
    this.parties.push(party)
  }

  public updateParty(party: Party){
    let old = this.parties.filter((party) => party.id == party.id)[0];
    let index = this.parties.indexOf(old);

    this.parties[index] = party; 
  }
}
