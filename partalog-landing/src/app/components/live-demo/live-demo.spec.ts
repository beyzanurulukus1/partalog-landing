import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDemoComponent } from './live-demo';

describe('LiveDemo', () => {
  let component: LiveDemoComponent;
  let fixture: ComponentFixture<LiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
