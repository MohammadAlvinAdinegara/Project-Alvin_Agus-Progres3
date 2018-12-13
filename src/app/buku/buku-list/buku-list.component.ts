import { Component, OnInit, OnDestroy } from '@angular/core';
import { Buku } from '../buku.model';
import { BukuService } from '../buku.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-buku-list',
  templateUrl: './buku-list.component.html',
  styleUrls: ['./buku-list.component.css']
})
export class BukuListComponent implements OnInit, OnDestroy {
  bukus:Buku[];
  subscription: Subscription;
  
  constructor(private bukuService:BukuService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.bukuService.bukuChanged
      .subscribe(
        (bukus: Buku[]) => {
          this.bukus = bukus;
        }
      )
    this.bukus = this.bukuService.getBukus();
  }
  onNewBuku(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
