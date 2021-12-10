import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encounter } from 'src/app/encounter/encounter/encounter.model';
import { EncounterService } from 'src/app/encounter/encounter/encounter.service';
import { Campaign } from '../campaign/campaign.model';
import { CampaignService } from '../campaign/campaign.service';

@Component({
  selector: 'app-campaignencounter',
  templateUrl: './campaignencounter.component.html',
  styleUrls: ['./campaignencounter.component.css']
})
export class CampaignencounterComponent implements OnInit {

  campaignService: CampaignService;
  campaign: Campaign = new Campaign;
  encounters: Encounter[]=[];
  encounter: Encounter= new Encounter;

  constructor(private campService: CampaignService, private encService: EncounterService,private router: Router, private route: ActivatedRoute) {
    this.campaignService = campService;
    
    this.encounters = encService.getEncounters();
   }
 
  ngOnInit(): void {
    this.campaign = this.campaignService.getCampaignById(this.route.snapshot.params.id);
  }

  OnSubmit(){
    if(confirm("Do you want to add this encounter?")){
      if(this.campaign.encounters.some(e => e.name === this.encounter.name)){
        alert("This encounter is already present")
      }else{
       this.campaign.encounters.push(this.encounter);
      this.router.navigate(['/campaigndetail/', this.campaign.id]);  
      }
      
    }
  }

}
