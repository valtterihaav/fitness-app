import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FappHeaderComponent } from './fapp-header.component';

describe('FappHeaderComponent', () => {
  let component: FappHeaderComponent;
  let fixture: ComponentFixture<FappHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FappHeaderComponent]
    });
    fixture = TestBed.createComponent(FappHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
