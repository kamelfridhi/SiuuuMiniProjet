import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierchambreComponent } from './modifierchambre.component';

describe('ModifierchambreComponent', () => {
  let component: ModifierchambreComponent;
  let fixture: ComponentFixture<ModifierchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
