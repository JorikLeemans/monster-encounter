import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign/campaign.model';
import { CampaignService } from '../campaign/campaign.service';

@Component({
  selector: 'app-campaigncreate',
  templateUrl: './campaigncreate.component.html',
  styleUrls: ['./campaigncreate.component.css']
})
export class CampaigncreateComponent implements OnInit {
  campaign: Campaign = new Campaign;
  name: string = "";
  players: string="";
  encounters: []=[];
  campaignCounter: number=0;
  

  constructor(private campaignService: CampaignService,private router: Router) {
    this.campaignCounter = this.campaignService.getCampaigns().length;
    console.log(this.campaignCounter);
   }

  ngOnInit(): void {
  }

  OnSubmit(){

   let playersArr = this.players.split(', ');

    console.log(this.name);
    this.campaign.id = this.campaignCounter +1;
    this.campaign.name = this.name;
  //  for(let i=0; i< playersArr.length; i++){
  //    this.campaign.players.push(playersArr[i])
  //  }
    this.campaign.players = playersArr;
    this.campaign.encounters = this.encounters;
    // Add current user as creator
    console.log(this.campaign);

    this.campaignService.addCampaign(this.campaign);
    this.router.navigate(['/campaign']);
  }

}
