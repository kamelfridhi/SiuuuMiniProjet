import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFoyerComponent } from './card-foyer.component';

describe('CardFoyerComponent', () => {
  let component: CardFoyerComponent;
  let fixture: ComponentFixture<CardFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
