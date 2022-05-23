import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minutos20Component } from './minutos20.component';

describe('Minutos20Component', () => {
  let component: Minutos20Component;
  let fixture: ComponentFixture<Minutos20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Minutos20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Minutos20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
