import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestoComponent } from './add-resto.component';

describe('AddFoyerComponent', () => {
  let component: AddRestoComponent;
  let fixture: ComponentFixture<AddRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
