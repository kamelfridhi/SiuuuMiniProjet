import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailschambreComponent } from './detailschambre.component';

describe('DetailschambreComponent', () => {
  let component: DetailschambreComponent;
  let fixture: ComponentFixture<DetailschambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailschambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailschambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
