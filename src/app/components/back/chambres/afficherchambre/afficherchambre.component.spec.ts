import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherchambreComponent } from './afficherchambre.component';

describe('AfficherchambreComponent', () => {
  let component: AfficherchambreComponent;
  let fixture: ComponentFixture<AfficherchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
