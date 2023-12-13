import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedfoyerComponent } from './affectedfoyer.component';

describe('AffectedfoyerComponent', () => {
  let component: AffectedfoyerComponent;
  let fixture: ComponentFixture<AffectedfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffectedfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
