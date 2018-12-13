import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BukuComponent } from './buku/buku.component';
import { DaftarListComponent } from './daftar-list/daftar-list.component';

//tambah code berikut
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import { BukuDetailComponent } from './buku/buku-detail/buku-detail.component';
//tambah code berkut (2)
import { BukuItemComponent } from './buku/buku-list/buku-item/buku-item.component';
//tambah code berikut (3)
import { DaftarEditComponent } from "./daftar-list/daftar-edit/daftar-edit.component";
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { DaftarListService } from './daftar-list/daftar-list.service';

import { BukuStartComponent } from './buku/buku-start/buku-start.component';
import { BukuEditComponent } from './buku/buku-edit/buku-edit.component';
import { BukuService } from './buku/buku.service';
import { DataStorageService } from './shared/data-storage.service';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      BukuComponent,
      DaftarListComponent,
      BukuListComponent,
      BukuDetailComponent,
      BukuStartComponent,
      BukuItemComponent,
      DaftarEditComponent,
      FooterComponent,
      DropdownDirective,
      BukuEditComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      AppRoutingModule
   ],
   providers: [
      DaftarListService,
      BukuService,
      DataStorageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
