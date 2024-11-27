import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InteractiveMapPage } from './interactive-map.page';

describe('InteractiveMapPage', () => {
  let component: InteractiveMapPage;
  let fixture: ComponentFixture<InteractiveMapPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
