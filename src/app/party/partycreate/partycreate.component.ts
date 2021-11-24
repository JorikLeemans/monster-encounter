import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Party } from '../party/party.model';
import { PartyService } from '../party/party.service';

@Component({
  selector: 'app-partycreate',
  templateUrl: './partycreate.component.html',
  styleUrls: ['./partycreate.component.css']
})
export class PartycreateComponent implements OnInit {
  party: Party = new Party;
  name: string = '';
  size: number=0;
  campaign: string='';
  users: []=[];
  partiesCount: number=0;

  

  constructor(private partyService: PartyService, private router: Router, private route: ActivatedRoute) {
    this.partiesCount = this.partyService.getParties().length;
    console.log(this.partiesCount)
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.name)
    this.party.id = this.partiesCount +1;
    this.party.name = this.name;
    this.party.size = this.party.users.length;
    this.party.campaign = this.campaign;
    this.party.users = this.users;

    this.partyService.addParty(this.party);
    this.router.navigate(['/party']);
  }

}
