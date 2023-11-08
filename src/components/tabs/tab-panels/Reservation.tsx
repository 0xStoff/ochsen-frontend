import * as React from "react";
import type { TextFieldProps } from "@mui/material";
import { CircularProgress, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { TimeView } from "@mui/x-date-pickers";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import 'dayjs/locale/de';
import type { ReservationInterface } from "@interfaces/reservation";


const RESERVATION_OFFSET_MINUTES = 60;
const TIMESTEPS_DATE_PICKER_MINUTES = 15;

interface TimeSlot {
    start: number;
    end: number | null;
}

interface BusinessDay {
    day: string;
    timeSlots: TimeSlot[];
}

interface TableInterface {
    id: number;
    size: number;
    isAvailable: boolean;
}

const fetchBusinessHours = (): Promise<BusinessDay[]> => {
    // Simulate fetching business hours from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            const businessHours: BusinessDay[] = [
                { day: 'Sunday', timeSlots: [] },
                { day: 'Monday', timeSlots: [{ start: 9, end: 13 }, { start: 17, end: null }] },
                { day: 'Tuesday', timeSlots: [{ start: 9, end: 13 }, { start: 17, end: null }] },
                { day: 'Wednesday', timeSlots: [{ start: 9, end: 13 }, { start: 17, end: null }] },
                { day: 'Thursday', timeSlots: [{ start: 9, end: 13 }, { start: 17, end: null }] },
                { day: 'Friday', timeSlots: [{ start: 9, end: 13 }, { start: 17, end: null }] },
                { day: 'Saturday', timeSlots: [{ start: 17, end: null }] },
            ];
            resolve(businessHours);
        }, 1000); // Simulated delay of 1 second
    });
};

const fetchTables = (): Promise<TableInterface[]> => {
    // Simulate fetching tables from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            const tables: TableInterface[] = [
                { id: 1, size: 4, isAvailable: true },
                { id: 2, size: 2, isAvailable: true },
                { id: 3, size: 6, isAvailable: false },
            ];
            resolve(tables);
        }, 1000); // Simulated delay of 1 second
    });
};


// Check if the current time is within a time slot.
function evaluateTimeSlotConditions(timeSlot: TimeSlot, hour: number, minute: number) {
    const atOrAfterStart = timeSlot.start <= hour;
    const beforeEnd = timeSlot.end === null || timeSlot.end > hour;
    const atExactEnd = timeSlot.end === hour && minute === 0;
    const atExactStart = timeSlot.start === hour && minute === 0;
    const afterStart = timeSlot.start > hour;
    return { atOrAfterStart, beforeEnd, atExactEnd, atExactStart, afterStart };
}


// TODO: Move calculating and time based logic to backend
const getNextOpeningTime = async (offsetMinutes: number, timeStep = 1): Promise<Dayjs | null> => {
    const businessHours = await fetchBusinessHours();

    let now = dayjs().add(offsetMinutes, 'minute');
    now = now.minute(Math.ceil(now.minute() / timeStep) * timeStep);

    let dayIndex = now.day();
    let hour = now.hour();
    let minute = now.minute();

    for (let i = 0; i < 7; i++) {
        const dayBusinessHours = businessHours[dayIndex % 7];
        if (dayBusinessHours.timeSlots.length > 0) {
            for (const timeSlot of dayBusinessHours.timeSlots) {

                const {
                    atOrAfterStart,
                    beforeEnd,
                    atExactEnd,
                    atExactStart,
                    afterStart
                } = evaluateTimeSlotConditions(timeSlot, hour, minute);


                if (afterStart || atExactStart) {
                    return now.hour(timeSlot.start).minute(0);
                } else if (atOrAfterStart && (beforeEnd || atExactEnd)) {
                    return now;
                }
            }
        }

        now = now.add(1, 'day').startOf('day');
        dayIndex++;
        hour = 0;
        minute = 0;
    }

    return null;
};


const Reservation: React.FC<{ reservation: ReservationInterface[] }> = ({ reservation }) => {
    const [defaultReservationTime, setDefaultReservationTime] = React.useState<Dayjs | null>(null);
    const reservationTime = React.useRef<Dayjs | null>(null);
    const [businessHours, setBusinessHours] = React.useState<BusinessDay[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    // React.useCallback()

    React.useEffect(() => {
        const fetchInitialData = async () => {
            setLoading(true);
            const fetchedBusinessHours = await fetchBusinessHours();
            const openingTime = await getNextOpeningTime(RESERVATION_OFFSET_MINUTES, TIMESTEPS_DATE_PICKER_MINUTES);

            setDefaultReservationTime(openingTime);
            reservationTime.current = openingTime
            // setReservationTime(openingTime)
            setBusinessHours(fetchedBusinessHours);
            setLoading(false);
        };

        fetchInitialData();
    }, []);

    // React.useEffect(()=>{
    //
    //     console.log(reservationTime.current?.toISOString())
    //
    // },[reservationTime.current,defaultReservationTime])

    const shouldDisableTime = (timeValue: Dayjs, viewType: TimeView) => {
        const dayIndex = timeValue.day();
        const hour = timeValue.hour();
        const minute = timeValue.minute();

        const todayHours = businessHours[dayIndex];

        const isInTimeSlot = todayHours && todayHours.timeSlots.some((slot) => {
            const { atOrAfterStart, beforeEnd, atExactEnd } = evaluateTimeSlotConditions(slot, hour, minute)
            return atOrAfterStart && (beforeEnd || atExactEnd);
        });

        return viewType === 'hours' || viewType === 'minutes' ? !isInTimeSlot : false;
    };

    const shouldDisableDate = (dateValue: Dayjs) => {
        const dayIndex = dateValue.day();
        const todayHours = businessHours[dayIndex];
        return todayHours.timeSlots.length === 0;
    };


    const renderTextField = (props: TextFieldProps) => (
        <TextField
            {...props}
            InputProps={{
                ...props.InputProps,
                endAdornment: loading && <CircularProgress size={20} /> || props.InputProps?.endAdornment || null,
            }}
        />
    )

    return (
        <>
            <LocalizationProvider adapterLocale='de' dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    disablePast
                    skipDisabled
                    disabled={loading}
                    label="Reservation"
                    onChange={(newValue) => {
                        reservationTime.current = newValue;
                        console.log(reservationTime.current);
                    }}
                    shouldDisableDate={shouldDisableDate}
                    shouldDisableTime={shouldDisableTime}
                    slots={{ textField: renderTextField }}
                    timeSteps={{ minutes: TIMESTEPS_DATE_PICKER_MINUTES }}
                    value={defaultReservationTime}
                />
            </LocalizationProvider>
            {Object.keys(reservation[0]).map((key) => (
                <Typography key={key.toString()}
                            variant="h3">{`${key}: ${reservation[0][key as keyof ReservationInterface]}`}</Typography>
            ))}
        </>
    );
};

export default Reservation;
