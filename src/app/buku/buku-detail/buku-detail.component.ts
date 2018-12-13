import { Component, OnInit } from '@angular/core';
import { Buku } from '../buku.model';
import { BukuService } from '../buku.service';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-buku-detail',
  templateUrl: './buku-detail.component.html',
  styleUrls: ['./buku-detail.component.css']
})
export class BukuDetailComponent implements OnInit {
  buku:Buku;
  id:number;

  constructor(private bukuService:BukuService,
              private route:ActivatedRoute,
              private router: Router) { 
              }
              
  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.buku=this.bukuService.getBuku(this.id);
      }
    )
  }

  onAddDaftarList(){
    this.bukuService.addJumlahDaftarList(this.buku.jumlah);
  }

  onEditBuku(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDeleteBuku(){
    this.bukuService.deleteBuku(this.id);
    this.router.navigate(['/recipes']);
  }
}
