import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountercreateComponent } from './encountercreate.component';

describe('EncountercreateComponent', () => {
  let component: EncountercreateComponent;
  let fixture: ComponentFixture<EncountercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncountercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncountercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
