import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRestoComponent } from './modifier-resto.component';

describe('ModifierFoyerComponent', () => {
  let component: ModifierRestoComponent;
  let fixture: ComponentFixture<ModifierRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
