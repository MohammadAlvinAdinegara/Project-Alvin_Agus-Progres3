import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BukuComponent } from './buku/buku.component';
import { DaftarListComponent } from './daftar-list/daftar-list.component';
import { BukuStartComponent } from './buku/buku-start/buku-start.component';
import { BukuDetailComponent } from './buku/buku-detail/buku-detail.component';
import { BukuEditComponent } from './buku/buku-edit/buku-edit.component';
import { HomeComponent} from './home/home.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'home',pathMatch:'full'},
    { path:'bukus',component:BukuComponent,children:[
        { path:'',component:BukuStartComponent},
        { path:'new',component:BukuEditComponent},
        { path:':id',component:BukuDetailComponent},
        { path:':id/edit',component:BukuEditComponent},
    ]},
    { path:'home',component:HomeComponent},
    { path:'bukulist',component:DaftarListComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}