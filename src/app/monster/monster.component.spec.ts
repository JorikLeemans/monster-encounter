import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { MonsterComponent } from './monster.component';
import { Monster } from './monster.model';
import { MonsterService } from './monster.service';
import { HttpClient } from '@angular/common/http';
import { textSpanOverlap } from 'typescript';

describe('MonsterComponent', () => {
  let component: MonsterComponent;
  let fixture: ComponentFixture<MonsterComponent>;
  let mockMonsterService: MonsterService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  //Mock Object
  const expectedMonsterData: Monster[] = [{
    id: 1,
    name: "Test1",
    hp: 20,
    cr: 12,
    movement: [{movementtype: "land", amount:30}],
    creator: {id: 1, username: "User1", password: "secret123", favorites: [], monsters: []}
  }]


describe('MonsterService', () => {
  let service: MonsterService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpSpy = jasmine.createSpyObj('HttpClient', ['get'], ['post']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpSpy}],
    });
    service = TestBed.inject(MonsterService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  })


it('should be created', () => {
  expect(service).toBeTruthy();
})
  

  //Haal alle monsters op
  //it('should retreive all monsters', () => {
  //  httpSpy.get.and.returnValue(of(expectedMonsterData));

  //  service.list().subscribe((monsters: Monster[]) => {
  //    console.log(monsters);
   //   expect(monsters.length).toBe(1);
  //    expect(monsters[0].id).toEqual(expectedMonsterData[0].id);
  //  })
  //})

  //Haal 1 monster op
  it('should return a single monster', () => {
    
  })

  //Voeg monster toe

  //Wijzig monster

  //Verwijder monster
})
});
