import { All } from 'src/app/general/all';

export class TruckScheduled {

    date: Date;
    id: number;
    name: string;

    constructor(date: Date, id: number, name: string) {
        this.date = date;
        this.id = id;
        this.name = name;
    }

    getDate() {
        return All.getDate(this.date);
    }
}
