import { TestBed } from '@angular/core/testing';

import { GetMateriaByCarreraService } from './get-materia-by-carrera.service';

describe('GetMateriaByCarreraService', () => {
  let service: GetMateriaByCarreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMateriaByCarreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
