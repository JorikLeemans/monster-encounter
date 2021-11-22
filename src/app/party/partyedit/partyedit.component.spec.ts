import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyeditComponent } from './partyedit.component';

describe('PartyeditComponent', () => {
  let component: PartyeditComponent;
  let fixture: ComponentFixture<PartyeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
