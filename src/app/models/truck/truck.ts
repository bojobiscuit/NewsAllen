export class Truck {

    id: number;
    name: string;
    type: string;
    imageUrl: string;
    webUrl: string;

    constructor(id: number, name: string, type: string, imageUrl: string, webUrl: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.imageUrl = imageUrl;
        this.webUrl = webUrl;
    }
}
