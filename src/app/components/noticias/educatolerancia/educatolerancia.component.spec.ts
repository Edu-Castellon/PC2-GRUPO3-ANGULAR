import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatoleranciaComponent } from './educatolerancia.component';

describe('EducatoleranciaComponent', () => {
  let component: EducatoleranciaComponent;
  let fixture: ComponentFixture<EducatoleranciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducatoleranciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducatoleranciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
