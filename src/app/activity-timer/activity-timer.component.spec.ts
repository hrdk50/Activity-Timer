import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTimerComponent } from './activity-timer.component';

describe('ActivityTimerComponent', () => {
  let component: ActivityTimerComponent;
  let fixture: ComponentFixture<ActivityTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
