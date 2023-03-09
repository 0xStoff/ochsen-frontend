import type { Themes } from "@/interfaces/themes";

export type HomepageInterface = {
    id: number | null;
    title: string;
    claim: string;
    event: string;
    caption: string;
    "logo": {
        "url": { [key in Themes]: string | null; };
        "alternativeText": { [key in Themes]: string | null; };
    } | null;
}