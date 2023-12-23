import React, { useEffect, useContext, useState } from 'react';
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api';
import UserContext from '../../context/UserContext';

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
    const { Avm, cityData } = useContext(UserContext)


    useEffect(() => {
        if (!Avm || !map) return;



        const filteredData = cityData
            .filter(item => item.ParentCity === Avm)
            .map(item => new window.google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng)));

        // Example heatmap data
        const data = [

            ...filteredData,  // Add LatLng objects from cityData
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
    }, [Avm, map, cityData]);
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