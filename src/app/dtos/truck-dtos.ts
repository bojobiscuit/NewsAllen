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
}