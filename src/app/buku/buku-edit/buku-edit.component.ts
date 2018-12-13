import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { BukuService } from '../buku.service';



@Component({
  selector: 'app-buku-edit',
  templateUrl: './buku-edit.component.html',
  styleUrls: ['./buku-edit.component.css']
})
export class BukuEditComponent implements OnInit {
  id:number;
  editMode=false;
  bukuForm: FormGroup;

  constructor( private route:ActivatedRoute,
               private bukuService: BukuService,
               private router: Router) {
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();
      }
    );
  }

  onSubmit(){
    // const newRecipe = new Recipe(
    // this.recipeForm.value['name'], 
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients']);
    if (this.editMode){
      this.bukuService.updateBuku(this.id, this.bukuForm.value);
    }else{
      this.bukuService.addBuku(this.bukuForm.value);
    }
    this.onCancel();
  }

  onAddJumlah(){
    (<FormArray>this.bukuForm.get('jumlahs')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
  onDeleteJumlah(index: number){
    (<FormArray>this.bukuForm.get('jumlahs')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let bukuName = '';
    let bukuImagePath = '';
    let bukuDescription = '';
    let bukuJumlah = new FormArray([]);

    if (this.editMode){
      const buku = this.bukuService.getBuku(this.id);
      bukuName = buku.name;
      bukuImagePath = buku.imagePath;
      bukuDescription = buku.description;
      if (buku['jumlahs']){
        for (let jumlah of buku.jumlah){
          bukuJumlah.push(
            new FormGroup({
              'name' : new FormControl(jumlah.name, Validators.required),
              'amount' : new FormControl(jumlah.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.bukuForm = new FormGroup({
      'name' : new FormControl(bukuName, Validators.required),
      'imagePath': new FormControl(bukuImagePath, Validators.required),
      'description' : new FormControl(bukuDescription, Validators.required),
      'jumlahs':bukuJumlah
    });
  }

}
