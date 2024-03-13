import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialActivitiesComponent } from './social-activities.component';

describe('SocialActivitiesComponent', () => {
  let component: SocialActivitiesComponent;
  let fixture: ComponentFixture<SocialActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
