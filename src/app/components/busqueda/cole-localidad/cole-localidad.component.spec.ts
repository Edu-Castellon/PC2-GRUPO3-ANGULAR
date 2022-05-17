import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeLocalidadComponent } from './cole-localidad.component';

describe('ColeLocalidadComponent', () => {
  let component: ColeLocalidadComponent;
  let fixture: ComponentFixture<ColeLocalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeLocalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
