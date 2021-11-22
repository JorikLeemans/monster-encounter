import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartydetailComponent } from './partydetail.component';

describe('PartydetailComponent', () => {
  let component: PartydetailComponent;
  let fixture: ComponentFixture<PartydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartydetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
