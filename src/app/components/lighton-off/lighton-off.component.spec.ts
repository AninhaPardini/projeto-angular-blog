import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightonOffComponent } from './lighton-off.component';

describe('LightonOffComponent', () => {
  let component: LightonOffComponent;
  let fixture: ComponentFixture<LightonOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightonOffComponent]
    });
    fixture = TestBed.createComponent(LightonOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
