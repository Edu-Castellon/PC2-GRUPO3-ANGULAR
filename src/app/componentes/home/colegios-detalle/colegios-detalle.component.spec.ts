import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiosDetalleComponent } from './colegios-detalle.component';

describe('ColegiosDetalleComponent', () => {
  let component: ColegiosDetalleComponent;
  let fixture: ComponentFixture<ColegiosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColegiosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
