import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRestoComponent } from './afficher-resto.component';

describe('AfficherFoyerComponent', () => {
  let component: AfficherRestoComponent;
  let fixture: ComponentFixture<AfficherRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherRestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
