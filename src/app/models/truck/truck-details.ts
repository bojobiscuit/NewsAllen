import { ScheduleDate } from 'src/app/dtos/truck-dtos';

export class TruckDetails {
    id: number;
    name: string;
    imageUrl: string;
    webUrl: string;
    loveRatings: number;
    likeRatings: number;
    mehRatings: number;
    scheduleDates: ScheduleDate[];
}
