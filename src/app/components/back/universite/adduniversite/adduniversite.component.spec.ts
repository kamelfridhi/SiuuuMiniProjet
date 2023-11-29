import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduniversiteComponent } from './adduniversite.component';

describe('AdduniversiteComponent', () => {
  let component: AdduniversiteComponent;
  let fixture: ComponentFixture<AdduniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdduniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
