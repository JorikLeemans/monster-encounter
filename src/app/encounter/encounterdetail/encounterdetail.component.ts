import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encounter } from '../encounter/encounter.model';
import { EncounterService } from '../encounter/encounter.service';

@Component({
  selector: 'app-encounterdetail',
  templateUrl: './encounterdetail.component.html',
  styleUrls: ['./encounterdetail.component.css']
})
export class EncounterdetailComponent implements OnInit {

  encounterService: EncounterService;
  encounter: Encounter = new Encounter();
  

  constructor(service: EncounterService, private router: Router, 
    private route: ActivatedRoute) { 
    this.encounterService = service;
  }

  ngOnInit(): void {
    this.encounter = this.encounterService.getEncounterById(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
  }

  addMonster(){
    this.router.navigate(['/encountermonster/', this.encounter.id]);
  }

  editEncounter(){
    this.router.navigate(['/encounteredit/', this.encounter.id]);
  }

  deleteEncounter(){
    if(confirm("Are you sure you want to delete this encounter?")){
    this.encounterService.encounters.splice(this.encounter.id - 1, 1);
    console.log(this.encounter.id);
    this.router.navigate(['encounter']);  
    }
    
  }


}
