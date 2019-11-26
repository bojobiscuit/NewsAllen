import { TruckHighlight } from '../models/truck/truck-highlight';
import { TruckScheduled } from '../models/truck/truck-scheduled';

export class TruckHighlightPage {
    todayTruck: TruckHighlight;
    nextTruck: TruckHighlight;
}

export class TruckSchedulePage {
    currentWeekTrucks: TruckScheduled[];
    futureTrucks: TruckScheduled[];
}

export class TruckUserRatingDto {
    truckId: number;
    userId: number;
    ratingId: number;
}

export class AddTruckScheduleDto {
    truckId: number;
    date: Date;
}

export class ScheduleDate {
    id: number;
    date: Date;
}

export class AlertDto {
    message: string;
    status: string;

    setAlert(msg: string, st: string) {
        this.message = msg;
        this.status = st;
    }
    setError(msg: string) {
        this.message = msg;
        this.status = "Error";
    }
    reset() {
        this.message = null;
        this.status = null;
    }
}