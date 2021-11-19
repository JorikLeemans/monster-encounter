import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MonsterItem, MonsterDataSource } from '../monster/monster-datasource';
import { Monster } from '../monster/monster.model';
import { MonsterService } from '../monster/monster.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monsterdetail',
  templateUrl: './monsterdetail.component.html',
  styleUrls: ['./monsterdetail.component.css']
})
export class MonsterdetailComponent implements OnInit {
  monsterService: MonsterService;
  monster: Monster = new Monster();
 // monsterObsv: Observable<Monster>;

  constructor(service: MonsterService, private router: Router, 
    private route: ActivatedRoute) { 
    this.monsterService = service;
  }

  ngOnInit(): void {
    this.monster = this.monsterService.getMonsterById(this.route.snapshot.params.id);
    console.log(this.route.snapshot.params.id);
  }

  editMonster(){
    this.router.navigate(['/monsteredit/', this.monster.id])
  }

  deleteMonster(){
    this.monsterService.monsters.splice(this.monster.id - 1, 1);
    console.log(this.monster.id);
    this.router.navigate(['monster']);
  }

}
