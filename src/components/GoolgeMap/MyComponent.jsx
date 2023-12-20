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
// Custom component to add a heatmap layer
function HeatmapLayer() {
    const map = useGoogleMap();
    useEffect(() => {
        if (!map) return;
        // Example heatmap data
        const data = [
            new window.google.maps.LatLng(35.1856, 33.3823),
            new window.google.maps.LatLng(35.1860, 33.3827),
            new window.google.maps.LatLng(35.1864, 33.3831),
            new window.google.maps.LatLng(35.1868, 33.3835),
            // Add more LatLng objects for heatmap data...
        ];
        const heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: data,
            map: map
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
            zoom={7}
        >
            <HeatmapLayer />
        </GoogleMap>
    ) : <></>;
}
export default React.memo(MyComponent);