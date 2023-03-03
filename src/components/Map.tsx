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


        // const svgMarker = {
        //     path: "M 114.77 49.58 c 37.1 0 70.3 28.43 70.3 71.61 c 0 46.65 -31.68 75.73 -71.61 75.73 c -41.66 0 -72 -31.68 -72 -72.47 C 41.42 85.6 69 49.58 114.77 49.58 Z m -4.34 8 C 86.12 57.61 64 78 64 118.59 c 0 40.36 22.13 70.09 53 70.09 c 26.25 0 46 -19.53 46 -61.41 C 162.94 81.7 138.85 57.61 110.43 57.61 Z M 173.57 80.67 c 13.26 -9.7 33.87 -28 46.26 -57.31 C 224.62 12 228.09 1.4 227 0.89 C 225.29 0.1 216.76 25 195.49 44 A 103.08 103.08 0 0 1 161 66 M 54.27 80.67 C 41 71 20.39 52.69 8 23.36 C 3.21 12 -0.26 1.4 0.85 0.89 C 2.55 0.1 11.07 25 32.34 44 A 103 103 0 0 0 69.28 65",
        //     // fillColor: "blue",
        //     // fillOpacity: 0.6,
        //     // strokeWeight: 0,
        //     // rotation: 0,
        //     scale: 0.3,
        //     // anchor: new google.maps.Point(0, 20),
        // };
        //

        script.onload = () => {
            const map = new google.maps.Map(mapRef.current as HTMLDivElement, options);
            new google.maps.Marker({
                position: options.center,
                map,
                title: "Restaurant Ochsen Beringen",
                label: "🐂"
                // icon: svgMarker
            });

            return () => map.setValues(null);
        };

        document.head.appendChild(script);
    }, [apiKey, options]);

    return <div ref={mapRef} style={{ height: '70vh', width: '100%', borderRadius: 10 }} />;
};

export default Map