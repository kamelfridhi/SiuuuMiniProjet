import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateloginComponent } from './updatelogin.component';

describe('UpdateloginComponent', () => {
  let component: UpdateloginComponent;
  let fixture: ComponentFixture<UpdateloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
