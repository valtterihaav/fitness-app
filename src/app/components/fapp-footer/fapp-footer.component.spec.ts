import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FappFooterComponent } from './fapp-footer.component';

describe('FappFooterComponent', () => {
  let component: FappFooterComponent;
  let fixture: ComponentFixture<FappFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FappFooterComponent]
    });
    fixture = TestBed.createComponent(FappFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
