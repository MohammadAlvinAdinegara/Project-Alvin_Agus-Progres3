import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Jumlah } from './jumlah.model';
import { DaftarListService } from '../daftar-list.service';

@Component({
  selector: 'app-daftar-edit',
  templateUrl: './daftar-edit.component.html',
  styleUrls: ['./daftar-edit.component.css']
})
export class DaftarEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Jumlah;

  constructor(private slsService:DaftarListService) { }

  ngOnInit() {
    this.subscription = this.slsService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slsService.getJumlah(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newJumlah= new Jumlah(value.name, value.amount);
    if (this.editMode){
      this.slsService.updateJumlah(this.editedItemIndex, newJumlah);
    } else{
      this.slsService.addJumlah(newJumlah);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slsService.deleteJumlah(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
