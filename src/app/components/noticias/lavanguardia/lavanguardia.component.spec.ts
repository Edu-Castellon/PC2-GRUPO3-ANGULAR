import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanguardiaComponent } from './lavanguardia.component';

describe('LavanguardiaComponent', () => {
  let component: LavanguardiaComponent;
  let fixture: ComponentFixture<LavanguardiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavanguardiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavanguardiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
