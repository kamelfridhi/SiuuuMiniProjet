import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnameComponent } from './loginname.component';

describe('LoginnameComponent', () => {
  let component: LoginnameComponent;
  let fixture: ComponentFixture<LoginnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
