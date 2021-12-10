import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigneditComponent } from './campaignedit.component';

describe('CampaigneditComponent', () => {
  let component: CampaigneditComponent;
  let fixture: ComponentFixture<CampaigneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaigneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
