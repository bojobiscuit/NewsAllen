export class ScheduledTruck {

    date: Date;
    id: number;
    name: string;
    type: string;
    imageUrl: string;

    constructor(date: Date, id: number, name: string, type: string, url: string) {
        this.date = date;
        this.id = id;
        this.name = name;
        this.type = type;
        this.imageUrl = url;
    }

    getDateYo() {
        return ScheduledTruck.months[this.date.getMonth() - 1] + " " + this.date.getDate();
    }

    getDateText() {
        if (this.isTomorrow()) {
            return "TOMORROW";
        }
        else {
            return ScheduledTruck.days[this.date.getDay()];
        }
    }

    static readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'nov', 'Dec'];
    static readonly days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    private isTomorrow = () => {
        // var today = new Date();
        // var tomorrow = new Date();

        // TODO: 11/6 date used for debugging
        var today = new Date(2019, 11, 6);
        var tomorrow = new Date(2019, 11, 6);
        tomorrow.setDate(today.getDate() + 1);

        return this.date.getDate() == tomorrow.getDate() &&
            this.date.getMonth() == tomorrow.getMonth() &&
            this.date.getFullYear() == tomorrow.getFullYear();
    }
}
