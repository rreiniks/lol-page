import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowlingabyssComponent } from './howlingabyss.component';

describe('HowlingabyssComponent', () => {
  let component: HowlingabyssComponent;
  let fixture: ComponentFixture<HowlingabyssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowlingabyssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowlingabyssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
