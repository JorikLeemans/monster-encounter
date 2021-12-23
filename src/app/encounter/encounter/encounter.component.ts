import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { Encounter } from './encounter.model';
import { EncounterService } from './encounter.service';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Encounter>;
  encounterService: EncounterService;

  displayedColumns = ['id', 'name', 'creator', 'players', 'monsters']

  constructor(private service: EncounterService, private router: Router) {
    this.encounterService = service;
   }

  ngAfterViewInit(): void {
    this.table.dataSource = this.encounterService.getEncounters();
  }

  getEncounter(id: number){
    console.log("Clicked on:" + id)
    this.router.navigate(['/encounterdetail/', id])
  }

}
