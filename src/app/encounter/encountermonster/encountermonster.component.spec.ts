import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountermonsterComponent } from './encountermonster.component';

describe('EncountermonsterComponent', () => {
  let component: EncountermonsterComponent;
  let fixture: ComponentFixture<EncountermonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncountermonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncountermonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
