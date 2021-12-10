import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigncreateComponent } from './campaigncreate.component';

describe('CampaigncreateComponent', () => {
  let component: CampaigncreateComponent;
  let fixture: ComponentFixture<CampaigncreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaigncreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
