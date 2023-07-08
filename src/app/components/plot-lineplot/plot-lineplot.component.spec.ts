import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLineplotComponent } from './plot-lineplot.component';

describe('PlotLineplotComponent', () => {
  let component: PlotLineplotComponent;
  let fixture: ComponentFixture<PlotLineplotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlotLineplotComponent]
    });
    fixture = TestBed.createComponent(PlotLineplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
