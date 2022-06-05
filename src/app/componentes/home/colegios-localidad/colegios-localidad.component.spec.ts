import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiosLocalidadComponent } from './colegios-localidad.component';

describe('ColegiosLocalidadComponent', () => {
  let component: ColegiosLocalidadComponent;
  let fixture: ComponentFixture<ColegiosLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColegiosLocalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiosLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
