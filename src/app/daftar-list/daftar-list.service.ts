import { Jumlah } from '../shared/jumlah.model';
import { Subject } from 'rxjs/Subject';


export class DaftarListService {
  jumlahsChanged = new Subject<Jumlah[]>();
  startedEditing = new Subject<number>();
  private jumlahs:Jumlah[]=[
    new Jumlah('Buku java',5),
    new Jumlah('Buku Angular',10),
  ];

getJumlahs(){
  return this.jumlahs.slice();
}

getJumlah(index: number){
  return this.jumlahs[index];
}
addJumlah(jumlah:Jumlah){
  this.jumlahs.push(jumlah);
  this.jumlahsChanged.next(this.jumlahs.slice());
}
addJumlahs(jumlahs: Jumlah[]) {
  // for (let ingredient of ingredients){
  // this.addIngredient(ingredient);
  // }
  this.jumlahs.push(...jumlahs);
  this.jumlahsChanged.next(this.jumlahs.slice());
}

updateJumlah(index: number, newJumlah: Jumlah){
  this.jumlahs[index] = newJumlah;
  this.jumlahsChanged.next(this.jumlahs.slice());
}

deleteJumlah(index: number){
  this.jumlahs.splice(index, 1); 
  this.jumlahsChanged.next(this.jumlahs.slice());
}
}
