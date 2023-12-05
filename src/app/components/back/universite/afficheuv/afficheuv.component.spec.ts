import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheuvComponent } from './afficheuv.component';

describe('AfficheuvComponent', () => {
  let component: AfficheuvComponent;
  let fixture: ComponentFixture<AfficheuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
