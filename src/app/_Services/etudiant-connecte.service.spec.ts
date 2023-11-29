import { TestBed } from '@angular/core/testing';

import { EtudiantConnecteService } from './etudiant-connecte.service';

describe('EtudiantConnecteService', () => {
  let service: EtudiantConnecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantConnecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
