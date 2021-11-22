import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartycreateComponent } from './partycreate.component';

describe('PartycreateComponent', () => {
  let component: PartycreateComponent;
  let fixture: ComponentFixture<PartycreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartycreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
