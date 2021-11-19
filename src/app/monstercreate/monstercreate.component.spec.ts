import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstercreateComponent } from './monstercreate.component';

describe('MonstercreateComponent', () => {
  let component: MonstercreateComponent;
  let fixture: ComponentFixture<MonstercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
