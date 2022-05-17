import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeNombreComponent } from './cole-nombre.component';

describe('ColeNombreComponent', () => {
  let component: ColeNombreComponent;
  let fixture: ComponentFixture<ColeNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColeNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
