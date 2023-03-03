import { CONTACT_INFORMATION } from "../../config/text";
// import Map from "../Map"
import { Typography } from "@mui/material";

export default function Contact() {

    // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    //
    // const options = {
    //     center: { lat: 37.7749, lng: -122.4194 },
    //     zoom: 13,
    // };

    return (
        <>
            {Object.entries(CONTACT_INFORMATION).map(([key, value]) =>
                <Typography key={key} variant="h2">{value}</Typography>
            )}
            {/*<div style={{ width: 500, height: 500 }}>*/}
            {/*    <Map apiKey={apiKey} options={options} />,*/}
            {/*</div>*/}
        </>
    )
}

