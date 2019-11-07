export class ScheduledTruck {

    constructor(date: Date, truckId: number, truckName: string, truckImageUrl: string) {
        this.date = date;
        this.truckId = truckId;
        this.truckName = truckName;
        this.truckImageUrl = truckImageUrl;
    }

    date: Date;
    truckId: number;
    truckName: string;
    truckImageUrl: string;

    getDateText() {
        if (this.isTomorrow()) {
            return "TOMORROW";
        }
        else {
            var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            return days[this.date.getDay()];
        }
    }

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
