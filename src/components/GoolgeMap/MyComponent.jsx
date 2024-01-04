import React, { useEffect, useContext, useState } from 'react';
import { GoogleMap, useJsApiLoader, useGoogleMap } from '@react-google-maps/api';
import UserContext from '../../context/UserContext';
const containerStyle = {
    width: '100%',
    height: '600px'
};

function HeatmapLayer({ center }) {
    const map = useGoogleMap();
    const { Avm, cityData } = useContext(UserContext);
    const [firstLatLng, setFirstLatLng] = useState(null);

    const setGradient = (itemValue) => {
        if (itemValue <= 500) {
            return ['rgba(0, 255, 255, 0)', '#b0addf'];
        } else if (itemValue >= 501 && itemValue <= 900) {
            return ['rgba(0, 255, 255, 0)', '#b0addf', '#71F663'];
        } else if (itemValue >= 901 && itemValue <= 1300) {
            return ['rgba(0, 255, 255, 0)', '#b0addf', '#71F663', '#f6f068'];
        } else if (itemValue >= 1301 && itemValue <= 1700) {
            return ['rgba(0, 255, 255, 0)', '#b0addf', '#71F663', '#f6f068', '#f9a76e'];
        } else if (itemValue > 1701) {
            return ['rgba(0, 255, 255, 0)', '#b0addf', '#71F663', '#f6f068', '#f9a76e', '#f37063'];
        }
    };


    useEffect(() => {
        if (!Avm || !map) return;

        const filteredData = cityData
            .filter(item => item.ParentCity === Avm)
            .map(item => ({
                location: new window.google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng)),
                value: item.averagePrice,
            }));

        if (filteredData.length > 0 && !firstLatLng) {
            setFirstLatLng(filteredData[0].location);
            map.setCenter(filteredData[0].location);
        }

        filteredData.forEach(item => {

            const heatmap = new window.google.maps.visualization.HeatmapLayer({
                data: [item.location],
                map: map,
                radius: 60,
                gradient: setGradient(item.value),
            });
        });

        return () => {
            // No need to explicitly remove the heatmap instances
        };
    }, [Avm, map, cityData, firstLatLng]);

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