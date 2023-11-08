import type { Dayjs } from "dayjs";

export interface ReservationInterface {
    id: number | null;
    name: string;
    phone: string;
    email: string;
    date: Dayjs | null;
    // time: string;
    peopleCount: number | null;
    tableNumber?: number | null;
    specialRequests?: string;
}
