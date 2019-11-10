export class All {

    static getDate(date: Date) {
        return All.months[date.getMonth() - 1] + " " + date.getDate();
    }

    static getDateText(date: Date) {
        if (this.isTomorrow(date)) {
            return "TOMORROW";
        }
        else {
            return All.days[date.getDay()];
        }
    }

    static isTomorrow = (date: Date) => {
        // var today = new Date();
        // var tomorrow = new Date();

        // TODO: 11/6 date used for debugging
        var today = new Date(2019, 11, 6);
        var tomorrow = new Date(2019, 11, 6);
        tomorrow.setDate(today.getDate() + 1);

        return date.getDate() == tomorrow.getDate() &&
            date.getMonth() == tomorrow.getMonth() &&
            date.getFullYear() == tomorrow.getFullYear();
    }

    static readonly months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'nov', 'Dec'];
    static readonly days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
}
