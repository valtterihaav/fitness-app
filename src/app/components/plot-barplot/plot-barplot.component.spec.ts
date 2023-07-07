import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBarplotComponent } from './plot-barplot.component';

describe('PlotBarplotComponent', () => {
  let component: PlotBarplotComponent;
  let fixture: ComponentFixture<PlotBarplotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotBarplotComponent]
    });
    fixture = TestBed.createComponent(PlotBarplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
