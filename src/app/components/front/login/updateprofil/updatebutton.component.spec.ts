import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebuttonComponent } from './updatebutton.component';

describe('UpdateprofilComponent', () => {
  let component: UpdatebuttonComponent;
  let fixture: ComponentFixture<UpdatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
