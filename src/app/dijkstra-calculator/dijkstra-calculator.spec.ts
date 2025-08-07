import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DijkstraCalculator } from './dijkstra-calculator';

describe('DijkstraCalculator', () => {
  let component: DijkstraCalculator;
  let fixture: ComponentFixture<DijkstraCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DijkstraCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DijkstraCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
