import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '600px'
};
const center = {
    lat: 35.1856,
    lng: 33.3823

};

const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgb(147,112,219)',
    'rgb(124,252,0)',
    'rgb(255,255,0)',
    'rgb(255,99,71)',
    'rgb(255,69,0)'

];

// Custom component to add a heatmap layer
function HeatmapLayer() {
    const map = useGoogleMap();
    useEffect(() => {
        if (!map) return;
        // Example heatmap data
        const data = [
            new window.google.maps.LatLng(24.8607343, 67.0011364),
            new window.google.maps.LatLng(35.1860, 33.3827),
            new window.google.maps.LatLng(35.1864, 33.3831),
            new window.google.maps.LatLng(35.1868, 33.3835),
            // Add more LatLng objects for heatmap data...
        ];
        const heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: data,
            map: map,
            radius: 60,
            gradient: gradient
        });
        return () => {
            heatmap.setMap(null);
        };
    }, [map]);
    return null;
}
function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA8RoMcKEBBnTIHOkCdQN4AmHONLCRbmDg",
        libraries: ['visualization'],  // Add 'visualization' to libraries
    });
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
        >
            <HeatmapLayer />
        </GoogleMap>
    ) : <></>;
}
export default React.memo(MyComponent);