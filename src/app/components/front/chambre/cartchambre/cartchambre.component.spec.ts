import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartchambreComponent } from './cartchambre.component';

describe('CartchambreComponent', () => {
  let component: CartchambreComponent;
  let fixture: ComponentFixture<CartchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
