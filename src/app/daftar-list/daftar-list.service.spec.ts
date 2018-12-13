/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DaftarListService } from './daftar-list.service';

describe('Service: DaftarList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaftarListService]
    });
  });

  it('should ...', inject([DaftarListService], (service: DaftarListService) => {
    expect(service).toBeTruthy();
  }));
});
