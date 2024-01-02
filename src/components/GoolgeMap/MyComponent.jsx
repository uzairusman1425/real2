import React, { useEffect, useContext, useState } from 'react';
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api';
import UserContext from '../../context/UserContext';
const containerStyle = {
    width: '100%',
    height: '600px'
};
const c = [
    'rgba(0, 255, 255, 0)',
    'rgb(147,112,219)',
    'rgb(124,252,0)',
    'rgb(255,99,71)',
    'rgb(255,69,0)'
];
function HeatmapLayer({ center }) {
    const map = useGoogleMap();
    const { Avm, cityData } = useContext(UserContext);
    const [firstLatLng, setFirstLatLng] = useState(null);
    const setGradient = (data, avm) => {
        const filteredData = data
            .filter(item => item.ParentCity === avm && typeof item.averagePrice === 'number');
        if (filteredData.length > 0) {
            const gradients = filteredData.map(item => {
                const itemValue = item.averagePrice;
                if (itemValue <= 200) {
                    return [
                        'rgba(0, 255, 255, 0)',
                        'rgb(147,112,219)',
                    ];
                } else if (itemValue >= 201 && itemValue <= 500) {
                    return [
                        'rgba(0, 255, 255, 0)',
                        'rgb(147,112,219)',
                        'rgb(124,252,0)',
                    ];
                } else if (itemValue >= 501 && itemValue <= 1000) {
                    return [
                        'rgba(0, 255, 255, 0)',
                        'rgb(147,112,219)',
                        'rgb(124,252,0)',
                        'rgb(255,255,0)',
                    ];
                } else if (itemValue >= 1001 && itemValue <= 1500) {
                    return [
                        'rgba(0, 255, 255, 0)',
                        'rgb(147,112,219)',
                        'rgb(124,252,0)',
                        'rgb(255,99,71)',
                        'rgb(255,99,71)',
                    ];
                } else if (itemValue >= 1500) {
                    return [
                        'rgba(0, 255, 255, 0)',
                        'rgb(147,112,219)',
                        'rgb(124,252,0)',
                        'rgb(255,99,71)',
                        'rgb(255,69,0)'
                    ];
                }
                return null; // Return null for values outside the defined ranges
            })
            return gradients;
        }
        return null; // Return null if the array is empty
    };
    const gradient = setGradient(cityData, Avm);
    let b = [];
    if (gradient !== null) {
        b = gradient.map((item) => {
            // Your code to handle each item in the gradient array
            console.log("1", item);
            return item;
        });
    } else {
        console.error("Gradient is null.");
    }
    console.log("2", b);
    useEffect(() => {
        if (!Avm || !map) return;
        const filteredData = cityData
            .filter(item => item.ParentCity === Avm)
            .map(item => new window.google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng)));
        if (filteredData.length > 0 && !firstLatLng) {
            setFirstLatLng(filteredData[0]);
            map.setCenter(filteredData[0]);
        }
        const data = [
            ...filteredData,
            // Add more LatLng objects for heatmap data...
        ];
        const heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: data,
            map: map,
            radius: 60,
            gradient: c
        });
        return () => {
            heatmap.setMap(null);
        };
    }, [Avm, map, cityData, firstLatLng, center]);
    return null;
}
const initialCenter = {
    lat: 35.1856,
    lng: 33.3823
};
function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA8RoMcKEBBnTIHOkCdQN4AmHONLCRbmDg",
        libraries: ['visualization'],
    });
    const [center, setCenter] = useState(initialCenter);
    const { Avm, cityData } = useContext(UserContext);
    useEffect(() => {
        // Find the first object where ParentCity matches Avm
        const matchingCity = cityData.find(city => city.ParentCity === Avm);
        if (matchingCity) {
            // Extract lat and lng from the matching city
            const newCenter = {
                lat: parseFloat(matchingCity.lat),
                lng: parseFloat(matchingCity.lng),
            };
            // Set the new center
            setCenter(newCenter);
        }
    }, [Avm, cityData]);
    return isLoaded ? (
        <GoogleMap
            key={`${center.lat}-${center.lng}`} // Change key on center change
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
        >
            <HeatmapLayer center={center} />
        </GoogleMap>
    ) : <></>;
}
export default React.memo(MyComponent);