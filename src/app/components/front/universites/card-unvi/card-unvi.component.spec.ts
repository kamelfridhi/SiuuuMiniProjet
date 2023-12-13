import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnviComponent } from './card-unvi.component';

describe('CardUnviComponent', () => {
  let component: CardUnviComponent;
  let fixture: ComponentFixture<CardUnviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUnviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUnviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
