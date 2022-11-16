import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AramComponent } from './aram.component';

describe('AramComponent', () => {
  let component: AramComponent;
  let fixture: ComponentFixture<AramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
