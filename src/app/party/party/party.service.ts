import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/user/user/user.model';
import { UserService } from 'src/app/user/user/user.service';
import { Party } from './party.model';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  //users: User[];
  parties: Party[] = [
    {id: 1, name: 'Party1', size:0, campaign:'Campaign1', users: [{id: 1, username: 'User1', password: "password123", favorites: [], monsters: []},]},
    {id: 2, name: 'Party2', size:0, campaign:'Campaign1', users: []},
    {id: 3, name: 'Party3', size:0, campaign:'Campaign1', users: []},
    {id: 4, name: 'Party4', size:0, campaign:'Campaign1', users: []},
    {id: 5, name: 'Party5', size:0, campaign:'Campaign1', users: []},  ];

  constructor(private serviceUser: UserService) {
    console.log('Service constructor aangeroepen');
    for(let i=0; i<this.parties.length; i++)
    this.parties[i].size = this.parties[i].users.length;
   // this.users = this.serviceUser.getUsers();
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
