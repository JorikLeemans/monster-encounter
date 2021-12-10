import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Campaign } from './campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Campaign>;
  campaignService: CampaignService;

  displayedColumns = ['id', 'name', 'creator', 'party', 'encounters']

  constructor(private service: CampaignService, private router: Router) {
    this.campaignService = service;
   }

  ngAfterViewInit(): void {
    this.table.dataSource = this.campaignService.getCampaigns();
  }

  getCampaign(id: number){
    console.log("Clicked on:" + id)
    this.router.navigate(['/campaigndetail/', id])
  }


}
