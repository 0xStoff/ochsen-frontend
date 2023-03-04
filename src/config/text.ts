import type { ContactInterface, MenuInterface, TypographyInterface } from "../interfaces/typography";

export const HOMEPAGE_TITLE: TypographyInterface = { variant: "h1", text: "Restaurant Ochsen Beringen" }
export const HOMEPAGE_CLAIM: TypographyInterface = {
    variant: "h5",
    text: "Das fein bürgerliche Restaurant in Ihrer Umgebung"
}
export const EVENT: TypographyInterface = {
    text: "Besuchen Sie uns am Metzgete vom 15.03 bis 20.03.2023",
    variant: "h2",
    styles: {
        color: "#e57373",
    }
}
export const TAB_TITLES = {
    menu: "Speisekarte",
    openingHours: "Öffnungszeiten",
    contact: "Kontakt",
}
export const OPENING_HOURS = {

    data: [
        {
            days: "Montag bis Freitag",
            time1: "Morgens 8.45 - 13.30",
            time2: "Abends ab 17.00"
        },
        {
            days: "Samstag",
            time1: null,
            time2: "Abends ab 17.00"
        },
        {
            days: "Sonntag Geschlossen",
            time1: null,
            time2: null
        },
        {
            days: "Weitere Öffnungszeiten auf Anfrage",
            time1: null,
            time2: null
        }
    ]
}
export const CONTACT_INFORMATION: ContactInterface = {
    variant: 'h3',
    data: {
        title: "Restaurant Ochsen",
        name: "Bernhard Mayer",
        street: "Oberdorf 13",
        postal: "8222 Beringen",
        phone: "052 685 11 45",
    }
}


export const CATEGORIES = ["Salate", "Suppen", "Fitnessteller", "Hits im Ochsen", "Fisch", "Vegetarisch", "Kinderteller (bis 12 Jahre)", "Nur auf Vorbestellung"]


export const MENU: MenuInterface = {
    variant: {
        course: 'h4',
        side: 'h6'
    },
    styles: {},
    data: [
    //     {
    //         id: 0,
    //         course: "Grüner Salat",
    //         side: null,
    //         price: 8.50,
    //     },
    //     {
    //         id: 1,
    //         course: "Fischknusperli",
    //         side: null,
    //         price: 8.50
    //     },
    //     {
    //         id: 2,
    //         course: "Gemischter Salat",
    //         side: null,
    //         price: 10.50
    //     },
    //     {
    //         id: 3,
    //         course: "Fleisch-Käse Salat",
    //         side: null,
    //         price: 12.50
    //     },
    //     {
    //         id: 4,
    //         course: "Wiener Schnitzel",
    //         side: "mit Pommes Frittes oder Salat",
    //         price: 19.50
    //     },
    //     {
    //         id: 5,
    //         course: "Forellenfilet „Müllerinnen Art“",
    //         side: "mit Gemüse oder Salaten Garniert",
    //         price: 24.50
    //     },
    //     {
    //         id: 6,
    //         course: "Schweinesteak „Maison“ mit Käse überbacken",
    //         side: "dazu Pommes frites",
    //         price: 26.50
    //     },
    //     {
    //         id: 7,
    //         course: "Fleisch Fondue (Diverse Fleischsorten), Bourguignon, Chinoise",
    //         side: "mit verschiedenen Sauces, Pommes frites, Salat",
    //         price: 36.00
    //     }
    ]
}