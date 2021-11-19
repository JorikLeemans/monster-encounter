import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstereditComponent } from './monsteredit.component';

describe('MonstereditComponent', () => {
  let component: MonstereditComponent;
  let fixture: ComponentFixture<MonstereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
