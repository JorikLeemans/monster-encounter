import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encounter } from 'src/app/encounter/encounter/encounter.model';
import { Campaign } from '../campaign/campaign.model';
import { CampaignService } from '../campaign/campaign.service';

@Component({
  selector: 'app-campaignedit',
  templateUrl: './campaignedit.component.html',
  styleUrls: ['./campaignedit.component.css']
})
export class CampaigneditComponent implements OnInit {
campaign: Campaign = new Campaign;
name: string="";
encounters: Encounter[]=[];

  constructor(private campaignService: CampaignService, private router: Router, private route: ActivatedRoute) {
    this.campaign = this.campaignService.getCampaignById(this.route.snapshot.params.id);
    console.log(this.campaign);
    this.name = this.campaign.name;
    this.encounters = this.campaign.encounters;
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.name);

    this.campaign.name = this.name;
    this.encounters = this.encounters;

    this.campaignService.updateCampaign(this.campaign);
    this.router.navigate(['/campaign']);
  }

}
