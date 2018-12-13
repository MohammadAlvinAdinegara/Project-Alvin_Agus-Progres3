import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Buku } from '../../buku.model'; 
import { BukuService } from '../../buku.service';

@Component({
  selector: 'app-buku-item',
  templateUrl: './buku-item.component.html',
  styleUrls: ['./buku-item.component.css']
})
export class BukuItemComponent implements OnInit {

  @Input() buku:Buku;
  @Input() index:number;
  // @Output() recipeSelected=new EventEmitter<void>();
  
  // constructor(private recipeService:RecipeService) { }

  ngOnInit() { 
    
  }
  // onSelected(){
    // this.recipeSelected.emit();
    // this.recipeService.recipeSelected.emit(this.recipe);        
  // }
}
