import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicosComponent } from './mosaicos.component';

describe('MosaicosComponent', () => {
  let component: MosaicosComponent;
  let fixture: ComponentFixture<MosaicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MosaicosComponent]
    });
    fixture = TestBed.createComponent(MosaicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
