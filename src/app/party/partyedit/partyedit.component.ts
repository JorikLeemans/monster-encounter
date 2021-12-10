import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user/user.model';
import { Party } from '../party/party.model';
import { PartyService } from '../party/party.service';

@Component({
  selector: 'app-partyedit',
  templateUrl: './partyedit.component.html',
  styleUrls: ['./partyedit.component.css']
})
export class PartyeditComponent implements OnInit {
  party: Party = new Party;
  name: string='';
  //campaign: string='';
  players: string='';

  constructor(private partyService: PartyService, private router: Router, private route: ActivatedRoute) {
    this.party = this.partyService.getPartyById(this.route.snapshot.params.id);
    console.log(this.party);
    this.name = this.party.name;
  //  this.campaign = this.party.campaign;
    this.players = <string>this.party.players;
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.name);

    this.party.name = this.name;
  //  this.party.campaign = this.campaign;
    <string[]>this.party.players;
    this.party.players = this.players.split(',');
    this.party.size = this.party.players.length;

    this.partyService.updateParty(this.party);
    this.router.navigate(['/party'])
  }

}
