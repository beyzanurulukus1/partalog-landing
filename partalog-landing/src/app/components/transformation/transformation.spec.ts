import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationComponent } from './transformation';

describe('Transformation', () => {
  let component: TransformationComponent;
  let fixture: ComponentFixture<TransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
