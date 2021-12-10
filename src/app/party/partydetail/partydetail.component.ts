import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user/user.model';
import { Party } from '../party/party.model';
import { PartyService } from '../party/party.service';

@Component({
  selector: 'app-partydetail',
  templateUrl: './partydetail.component.html',
  styleUrls: ['./partydetail.component.css']
})
export class PartydetailComponent implements OnInit {

  partyService: PartyService;
  party: Party = new Party();
  //users: User[] = this.party.users;
 // partyObsv: Observable<Party>;

  constructor(service: PartyService, private router: Router, 
    private route: ActivatedRoute) { 
    this.partyService = service;
  }

  ngOnInit(): void {
    this.party = this.partyService.getPartyById(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
  }

  editParty(){
    this.router.navigate(['/partyedit/', this.party.id])
  }

  deleteParty(){
    if(confirm("Are you sure you want to delete this campaign?")){
    this.partyService.parties.splice(this.party.id - 1, 1);
    console.log(this.party.id);
    this.router.navigate(['party']);  
    }
    
  }

}
