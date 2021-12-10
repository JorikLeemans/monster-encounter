import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Campaign } from './campaign.model';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  campaigns: Campaign[] = [
    {id: 1, name: 'Campaign1', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, party: {id: 1, name: 'Party1', size:0, campaign:'Campaign1', players: ["Jaap", "Bart"]}, encounters: []},
    {id: 2, name: 'Campaign2', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, party: {id: 1, name: 'Party1', size:0, campaign:'Campaign1', players: ["Jaap", "Bart"]}, encounters: []},
    {id: 3, name: 'Campaign3', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, party: {id: 1, name: 'Party1', size:0, campaign:'Campaign1', players: ["Jaap", "Bart"]}, encounters: []}, 
    {id: 4, name: 'Campaign4', creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, party: {id: 1, name: 'Party1', size:0, campaign:'Campaign1', players: ["Jaap", "Bart"]}, encounters: [{id: 1, name: "Encounter1", creator: {id: 1, username: 'User1', password: "password123", favorites: [], monsters: []}, players: [], monsters: [], difficulty: 2}]},
  ];

  constructor() {
    console.log('CampaignService constructor aangeroepen');
  }

  public getCampaignById(id: number): Campaign{
      return this.campaigns.filter((campaign) => campaign.id == id)[0];
  }

  public getCampaigns(): Campaign[]{
      return this.campaigns;
  }

  public addCampaign(campaign: Campaign){
    this.campaigns.push(campaign)
  }

  public updateCampaign(campaign: Campaign){
    let old = this.campaigns.filter((campaign) => campaign.id == campaign.id)[0];
    let index = this.campaigns.indexOf(old);

    this.campaigns[index] = campaign; 
  }
}
