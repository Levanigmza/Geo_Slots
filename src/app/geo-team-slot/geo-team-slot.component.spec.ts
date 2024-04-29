import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTeamSlotComponent } from './geo-team-slot.component';

describe('GeoTeamSlotComponent', () => {
  let component: GeoTeamSlotComponent;
  let fixture: ComponentFixture<GeoTeamSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoTeamSlotComponent]
    });
    fixture = TestBed.createComponent(GeoTeamSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
