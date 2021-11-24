import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MonsterDataSource, MonsterItem } from './monster-datasource';
import { Router, ActivatedRoute } from '@angular/router';
import { MonsterService } from './monster.service';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.css']
})
export class MonsterComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MonsterItem>; 
  monsterService: MonsterService;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'hp', 'cr', 'movement'];

  constructor(private service: MonsterService, private router: Router) {
    this.monsterService = service;
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.monsterService.getMonsters();
  }

  getMonster(id: number){
    console.log("Clicked on:" + id)
    this.router.navigate(['/monsterdetail/', id])
  }

  
}
