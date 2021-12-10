import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignencounterComponent } from './campaignencounter.component';

describe('CampaignencounterComponent', () => {
  let component: CampaignencounterComponent;
  let fixture: ComponentFixture<CampaignencounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignencounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignencounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
