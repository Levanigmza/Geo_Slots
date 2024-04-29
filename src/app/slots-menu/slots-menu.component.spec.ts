import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsMenuComponent } from './slots-menu.component';

describe('SlotsMenuComponent', () => {
  let component: SlotsMenuComponent;
  let fixture: ComponentFixture<SlotsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotsMenuComponent]
    });
    fixture = TestBed.createComponent(SlotsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
