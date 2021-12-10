import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountereditComponent } from './encounteredit.component';

describe('EncountereditComponent', () => {
  let component: EncountereditComponent;
  let fixture: ComponentFixture<EncountereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncountereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncountereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
