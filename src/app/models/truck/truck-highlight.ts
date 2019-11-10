import { All } from 'src/app/general/all';

export class TruckHighlight {

    date: Date;
    id: number;
    name: string;
    imageUrl: string;

    constructor(date: Date, id: number, name: string, url: string) {
        this.date = date;
        this.id = id;
        this.name = name;
        this.imageUrl = url;
    }
}
