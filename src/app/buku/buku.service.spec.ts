/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BukuService } from './buku.service';

describe('Service: Buku', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BukuService]
    });
  });

  it('should ...', inject([BukuService], (service: BukuService) => {
    expect(service).toBeTruthy();
  }));
});
