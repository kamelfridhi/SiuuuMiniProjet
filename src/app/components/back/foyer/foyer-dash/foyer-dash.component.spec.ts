import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerDashComponent } from './foyer-dash.component';

describe('FoyerDashComponent', () => {
  let component: FoyerDashComponent;
  let fixture: ComponentFixture<FoyerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
