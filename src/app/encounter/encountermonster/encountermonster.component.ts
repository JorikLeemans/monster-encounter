import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from 'src/app/monster/monster.model';
import { MonsterService } from 'src/app/monster/monster.service';
import { Encounter } from '../encounter/encounter.model';
import { EncounterService } from '../encounter/encounter.service';

@Component({
  selector: 'app-encountermonster',
  templateUrl: './encountermonster.component.html',
  styleUrls: ['./encountermonster.component.css']
})
export class EncountermonsterComponent implements OnInit {

  encounterService: EncounterService;
  monster: Monster = new Monster;
  monsters: Monster[]=[];
  encounter: Encounter= new Encounter;

  constructor(private monsService: MonsterService, private encService: EncounterService,private router: Router, private route: ActivatedRoute) {
    this.encounterService = encService;
    
    this.monsters = monsService.getMonsters();
   }
 
  ngOnInit(): void {
    this.encounter = this.encounterService.getEncounterById(this.route.snapshot.params.id);
  }

  OnSubmit(){
    if(confirm("Do you want to add this monster?")){
      if(this.encounter.monsters.some(e => e.name === this.monster.name)){
        alert("This monster is already present")
      }else{
       this.encounter.monsters.push(this.monster);
      this.router.navigate(['/encounterdetail/', this.encounter.id]);  
      }
      
    }
  }

}
