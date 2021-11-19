import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster/monster.model';
import { MonsterService } from '../monster/monster.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-monstercreate',
  templateUrl: './monstercreate.component.html',
  styleUrls: ['./monstercreate.component.css']
})
export class MonstercreateComponent implements OnInit {

  monster: Monster = new Monster;
  name: string ='';
  hp: number=0;
  cr: number=0;
  movement: [] = [];
  activeLand: boolean = false;
  activeFly: boolean = false;
  activeSwim: boolean = false;
  activeClimb: boolean = false;
  activeBurrow: boolean = false;
  amountLand: number=0;
  amountSwim: number=0;
  amountFly: number=0;
  amountClimb: number=0;
  amountBurrow: number=0;
  monsterMovementCount = 0;
  monsterCount =0;

  hidden: string ='';

  constructor(private monsterService: MonsterService, private router: Router, private route: ActivatedRoute) {
    this.monsterCount = this.monsterService.getMonsters().length;
    console.log(this.monsterCount)
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.name)
    this.monster.id = this.monsterCount + 1;
    this.monster.name = this.name;
    this.monster.hp = this.hp;
    this.monster.cr = this.cr;

    console.log(this.amountLand + " land")
    console.log(this.amountSwim + " swim")
    console.log(this.amountFly + " fly")
    console.log(this.amountClimb + " climb")
    console.log(this.amountBurrow + " burrow")
     
    var movement = [];
    if(this.amountLand != 0){
      this.monster.movement.push({movementtype: "land", amount: this.amountLand})   
    }
    if(this.amountSwim != 0){
      this.monster.movement.push({movementtype: "swim", amount: this.amountSwim})
    }
    if(this.amountFly != 0){
      this.monster.movement.push({movementtype: "fly", amount: this.amountFly})    
    }
  
    if(this.amountClimb != 0){
      this.monster.movement.push({movementtype: "climb", amount: this.amountClimb})     
    }
  
    if(this.amountBurrow != 0){
      this.monster.movement.push({movementtype: "burrow", amount: this.amountBurrow})      
    }
    
    console.log(this.monster.movement);

    this.monsterService.addMonster(this.monster);
    
    this.router.navigate(['/monster']);
  }
}