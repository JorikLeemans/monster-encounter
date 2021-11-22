import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []},
    {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []},
    {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []},  
    {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []},  
  ];

  constructor() {
    console.log('Service constructor aangeroepen');
  }

  public getUserById(id: number): User{
      return this.users.filter((user) => user.id == id)[0];
  }

  public getUsers(): User[]{
      return this.users;
  }

  public addUser(user: User){
    this.users.push(user)
  }

  public updateUser(user: User){
    let old = this.users.filter((user) => user.id == user.id)[0];
    let index = this.users.indexOf(old);

    this.users[index] = user; 
  }
}
