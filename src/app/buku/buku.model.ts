import { Jumlah } from "../daftar-list/daftar-edit/jumlah.model";

export class Buku{
    public name:string;
    public description:string;
    public imagePath:string;
    public jumlah:Jumlah[];

    constructor(name:string,desc:string,imagePath:string,jumlah:Jumlah[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.jumlah=jumlah;
    }
}