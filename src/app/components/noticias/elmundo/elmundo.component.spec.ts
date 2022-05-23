import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmundoComponent } from './elmundo.component';

describe('ElmundoComponent', () => {
  let component: ElmundoComponent;
  let fixture: ComponentFixture<ElmundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
