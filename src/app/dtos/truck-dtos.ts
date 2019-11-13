import { TruckHighlight } from '../models/truck/truck-highlight';

export class TruckHighlightPage {
    todayTruck: TruckHighlight;
    nextTruck: TruckHighlight;
}

export class TruckUserRatingDto {
    truckId: number;
    userId: number;
    ratingId: number;
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