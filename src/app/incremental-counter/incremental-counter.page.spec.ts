import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncrementalCounterPage } from './incremental-counter.page';

describe('IncrementalCounterPage', () => {
  let component: IncrementalCounterPage;
  let fixture: ComponentFixture<IncrementalCounterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementalCounterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
