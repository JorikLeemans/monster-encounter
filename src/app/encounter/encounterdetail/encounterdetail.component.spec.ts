import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterdetailComponent } from './encounterdetail.component';

describe('EncounterdetailComponent', () => {
  let component: EncounterdetailComponent;
  let fixture: ComponentFixture<EncounterdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
