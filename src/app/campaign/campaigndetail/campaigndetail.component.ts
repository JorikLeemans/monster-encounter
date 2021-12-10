import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../campaign/campaign.model';
import { CampaignService } from '../campaign/campaign.service';

@Component({
  selector: 'app-campaigndetail',
  templateUrl: './campaigndetail.component.html',
  styleUrls: ['./campaigndetail.component.css']
})
export class CampaigndetailComponent implements OnInit {
  campaignService: CampaignService;
  campaign: Campaign = new Campaign;

  constructor(private service: CampaignService, private router: Router, private route: ActivatedRoute) {
    this.campaignService = service;
   }
 
  ngOnInit(): void {
    this.campaign = this.campaignService.getCampaignById(this.route.snapshot.params.id);
  }

  addEncounter(){
    this.router.navigate(['/campaignencounter/', this.campaign.id]);
  }

  editCampaign(){
    this.router.navigate(['/campaignedit/', this.campaign.id])
  }

  deleteCampaign(){
    if(confirm("Are you sure you want to delete this campaign?")){
      this.campaignService.campaigns.splice(this.campaign.id -1, 1)
      console.log(this.campaign.id);
      this.router.navigate(['campaign']);
    }
    
  }

}
