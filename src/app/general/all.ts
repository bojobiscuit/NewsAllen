export class All {

    static getDateOuput(date: Date) {
        return All.months[date.getMonth()] + " " + date.getDate();
    }

    static getDateText(date: Date) {
        if (this.isTomorrow(date)) {
            return "TOMORROW";
        }
        else if (this.isOverAWeekFromNow(date)) {
            return `${this.months[date.getMonth()]} ${date.getDate()}`;
        }
        else {
            return All.days[date.getDay()];
        }
    }

    static isTomorrow = (date: Date) => {
        // var today = new Date();
        // var tomorrow = new Date();

        // TODO: 11/6 date used for debugging
        var tomorrow = new Date(2019, 10, 6);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return date.getDate() == tomorrow.getDate() &&
            date.getMonth() == tomorrow.getMonth() &&
            date.getFullYear() == tomorrow.getFullYear();
    }

    static isOverAWeekFromNow = (date: Date) => {
        // var today = new Date();
        // var tomorrow = new Date();

        // TODO: 11/6 date used for debugging
        var tomorrow = new Date(2019, 10, 6);
        tomorrow.setDate(tomorrow.getDate() + 7);

        return date >= tomorrow;
    }

    static readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'nov', 'Dec'];
    static readonly days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
}
