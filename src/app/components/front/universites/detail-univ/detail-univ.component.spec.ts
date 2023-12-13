import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUnivComponent } from './detail-univ.component';

describe('DetailUnivComponent', () => {
  let component: DetailUnivComponent;
  let fixture: ComponentFixture<DetailUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
