import type { DishesByCategories, ResponseArray } from "@interfaces/menu";
import type { ContactInterface } from "@interfaces/contact";
import type { HomepageInterface } from "@interfaces/event";
import type { OpeningHoursInterface } from "@interfaces/opening-hours-interface";
import type { ReservationInterface } from "@interfaces/reservation";
import dayjs from "dayjs";


export async function fetchContact(): Promise<ContactInterface> {
    try {
        const responseContact = await fetch(`${process.env.REACT_APP_BASE_URL}/api/contact`);
        return responseContact.json()
    } catch (error) {
        console.error(error);
        throw new Error("error fetching contact");
    }
}


const fetchReservation = (): Promise<Array<ReservationInterface>> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                id: 69,
                name: 'Christoph Mayer',
                phone: '123456789',
                email: 'test@mail.com',
                date: dayjs('2023-04-04T16:00:00.000Z'),
                // time: '14.25',
                peopleCount: 5,
                tableNumber: 2,
                specialRequests: 'einmal vegetarier dabei',
            }]);
        }, 1000);
    });
};


export async function fetchReservations(): Promise<Array<ReservationInterface>> {
    try {
        const responseReservations = await fetch(`${process.env.REACT_APP_BASE_URL}/api/reservations`);
        console.log(await responseReservations.json())
        // return responseReservations.json()
        return [{
            id: 69,
            name: 'Christoph Mayer',
            phone: '123456789',
            email: 'test@mail.com',
            date: dayjs('2023-04-04T16:00:00.000Z'),
            // time: '14.25',
            peopleCount: 5,
            tableNumber: 2,
            specialRequests: 'einmal vegetarier dabei',
        }]
    } catch (error) {
        console.error(error);
        throw new Error("error fetching contact");
    }
}

export async function fetchHomepage(): Promise<HomepageInterface & { id: number }> {
    try {
        const responseEvent = await fetch(`${process.env.REACT_APP_BASE_URL}/api/homepage`);
        return responseEvent.json();
    } catch (error) {
        console.error(error);
        throw new Error("error fetching homepage");
    }
}


export async function fetchOpeningHours(): Promise<Array<OpeningHoursInterface & { id: number }>> {
    try {
        const responseOpeningHours = await fetch(`${process.env.REACT_APP_BASE_URL}/api/opening-hours`);
        const openingHoursJson: ResponseArray<OpeningHoursInterface> = await responseOpeningHours.json();
        return openingHoursJson.data.map(({ id, attributes: { title, subtitle1, subtitle2 } }) => ({
            id,
            title,
            subtitle1,
            subtitle2,
        }))
    } catch (error) {
        console.error(error);
        throw new Error("error fetching opening hours");
    }
}

export async function fetchMenu(): Promise<DishesByCategories> {
    try {
        const responseMenus = await fetch(`${process.env.REACT_APP_BASE_URL}/api/menus?populate=*`);
        return responseMenus.json();
    } catch (error) {
        console.error(error);
        throw new Error("error fetching menu");
    }
}
