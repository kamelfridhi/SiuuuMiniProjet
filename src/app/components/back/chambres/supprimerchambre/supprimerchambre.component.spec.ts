import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerchambreComponent } from './supprimerchambre.component';

describe('SupprimerchambreComponent', () => {
  let component: SupprimerchambreComponent;
  let fixture: ComponentFixture<SupprimerchambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerchambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
