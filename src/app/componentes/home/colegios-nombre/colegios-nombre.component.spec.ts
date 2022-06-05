import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColegiosNombreComponent } from './colegios-nombre.component';

describe('ColegiosNombreComponent', () => {
  let component: ColegiosNombreComponent;
  let fixture: ComponentFixture<ColegiosNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColegiosNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColegiosNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
