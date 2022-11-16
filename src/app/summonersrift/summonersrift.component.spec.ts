import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonersriftComponent } from './summonersrift.component';

describe('SummonersriftComponent', () => {
  let component: SummonersriftComponent;
  let fixture: ComponentFixture<SummonersriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonersriftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummonersriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
