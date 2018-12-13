import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { BukuService } from "../buku/buku.service";
import { Buku } from "../buku/buku.model";
import 'rxjs/add/operator/map';
@Injectable()
export class DataStorageService {
    constructor(private http: Http, private bukuService: BukuService) {}

    storeRecipe(){
        return this.http.put('https://ng-recipe-book-33519.firebaseio.com/recipes.json',this.bukuService
        .getBukus());
    } 

    getBukus() {
        this.http.get('https://ng-recipe-book-33519.firebaseio.com/percobaan.json')
        .map(
            (response: Response) => {
                const bukus: Buku[] = response.json();
                for (let buku of bukus) {
                    if (!buku['jumlahs']){
                        buku['jumlahs'] = [];
                    }
                }
                return bukus;
            }
        )
        .subscribe(
            (bukus: Buku[]) => {
                this.bukuService.setBukus(bukus);
            }
        );
    }
}