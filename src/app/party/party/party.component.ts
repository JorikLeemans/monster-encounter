import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Party } from './party.model';
import { PartyService } from './party.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<Party>; 

  partyService: PartyService;
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'size', 'campaign', 'users'];

  constructor(private service: PartyService, private router: Router) { 
    this.partyService = service;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.table.dataSource = this.partyService.getParties();
  }
  getParty(id: number){
    console.log("Clicked on:" + id)
    this.router.navigate(['/partydetail/', id])
  }

}
