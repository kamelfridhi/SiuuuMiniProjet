import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterchambreComponent } from './ajouterchambre.component';

describe('AjouterchambreComponent', () => {
  let component: AjouterchambreComponent;
  let fixture: ComponentFixture<AjouterchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
