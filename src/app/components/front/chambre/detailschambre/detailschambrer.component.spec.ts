import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailschambrerComponent } from './detailschambrer.component';

describe('DetailschambreComponent', () => {
  let component: DetailschambrerComponent;
  let fixture: ComponentFixture<DetailschambrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailschambrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailschambrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
