import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPortifolioComponent } from './header-portifolio.component';

describe('HeaderPortifolioComponent', () => {
  let component: HeaderPortifolioComponent;
  let fixture: ComponentFixture<HeaderPortifolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPortifolioComponent]
    });
    fixture = TestBed.createComponent(HeaderPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
