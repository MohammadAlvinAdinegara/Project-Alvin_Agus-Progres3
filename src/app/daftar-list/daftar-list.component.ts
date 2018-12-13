import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Jumlah } from '../shared/jumlah.model';
import { DaftarListService } from './daftar-list.service';

@Component({
  selector: 'app-daftar-list',
  templateUrl: './daftar-list.component.html',
  styleUrls: ['./daftar-list.component.css']
})
export class DaftarListComponent implements OnInit, OnDestroy {
  jumlahs :Jumlah[];
  private subscription: Subscription;
  
  constructor(private slsService:DaftarListService) { }

  ngOnInit() {
    this.jumlahs  = this.slsService.getJumlahs();
    this.subscription = this.slsService.jumlahsChanged
    .subscribe(
      (jumlah:Jumlah[])=>{
        this.jumlahs=jumlah;
      }
    );
  }

  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
