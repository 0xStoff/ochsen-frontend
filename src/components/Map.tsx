import { FC, useEffect, useRef } from "react";

interface MapProps {
    apiKey?: string;
    options: google.maps.MapOptions;
}

const Map: FC<MapProps> = ({ apiKey, options }) => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.defer = true;
        script.async = true;


        script.onload = () => {
            const map = new google.maps.Map(mapRef.current as HTMLDivElement, options);

            return () => map.setValues(null);
        };

        document.head.appendChild(script);
    }, [apiKey, options]);

    return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map