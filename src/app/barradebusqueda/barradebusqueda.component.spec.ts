import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradebusquedaComponent } from './barradebusqueda.component';

describe('BarradebusquedaComponent', () => {
  let component: BarradebusquedaComponent;
  let fixture: ComponentFixture<BarradebusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarradebusquedaComponent]
    });
    fixture = TestBed.createComponent(BarradebusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
