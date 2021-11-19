import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster/monster.model';
import { MonsterService } from '../monster/monster.service';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-monsteredit',
  templateUrl: './monsteredit.component.html',
  styleUrls: ['./monsteredit.component.css']
})
export class MonstereditComponent implements OnInit {
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

  hidden: string ='';

  constructor(private monsterService: MonsterService, private router: Router, private route: ActivatedRoute) {
    this.monster = this.monsterService.getMonsterById(this.route.snapshot.params.id);
    console.log(this.monster)
    this.name = this.monster.name;
    this.hp = this.monster.hp;
    this.cr = this.monster.cr;
    this.monsterMovementCount = this.monster.movement.length;

    for(let i = 0; i< this.monsterMovementCount; i++){
      console.log(i)
    
    if(this.monster.movement[i].movementtype == "land")
    this.amountLand = this.monster.movement[i].amount
    if(this.monster.movement[i].movementtype == "swim")
    this.amountSwim = this.monster.movement[i].amount
    if(this.monster.movement[i].movementtype == "fly")
    this.amountFly = this.monster.movement[i].amount
    if(this.monster.movement[i].movementtype == "climb")
    this.amountClimb = this.monster.movement[i].amount
    if(this.monster.movement[i].movementtype == "burrow")
    this.amountBurrow = this.monster.movement[i].amount
    }
   }

  ngOnInit(): void {
  }

  OnSubmit(){
    console.log(this.name)

    this.monster.name = this.name;
    this.monster.hp = this.hp;
    this.monster.cr = this.cr;
    this.monster.movement = [];

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

    this.monsterService.updateMonster(this.monster);
    
    this.router.navigate(['/monster']);
  }
}
