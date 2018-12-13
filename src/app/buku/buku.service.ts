import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Buku } from '../buku/buku.model';
import { Jumlah } from '../daftar-list/daftar-edit/jumlah.model';
import { DaftarListService } from '../daftar-list/daftar-list.service';

@Injectable()
export class BukuService {
  bukuChanged = new Subject<Buku[]>();
  
  //property:class recipe
  private buku:Buku[]=[
    new Buku('Teknik Hacking Pemula',
    'Buku IT',
    '../src/app/img/IT2.jpg',
[  ]),
new Buku('Buku IT', 
  'How to make fried chiken',
  '../src/app/img/IT4.jpg',
[]),
  ];

  constructor(private slsService: DaftarListService) { }

  setBukus(bukus: Buku[]) {
    this.buku = bukus;
    this.bukuChanged.next(this.buku.slice());
  }

  getBukus(){
    return this.buku.slice();
  }
  addJumlahDaftarList(jumlah: Jumlah[]){
    this.slsService.addJumlahs(jumlah);
  }
  getBuku(index:number){
    return this.buku[index];
  }

  addBuku(buku: Buku){
    this.buku.push(buku);
    this.bukuChanged.next(this.buku.slice());
  }

  updateBuku(index: number, newBuku: Buku){
    this.buku[index] = newBuku;
    this.bukuChanged.next(this.buku.slice());
  }

  deleteBuku(index: number){
    this.buku.splice(index, 1);
    this.bukuChanged.next(this.buku.slice());
  }
}
