import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherchambresComponent } from './afficherchambres.component';

describe('AfficherchambresComponent', () => {
  let component: AfficherchambresComponent;
  let fixture: ComponentFixture<AfficherchambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherchambresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherchambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
