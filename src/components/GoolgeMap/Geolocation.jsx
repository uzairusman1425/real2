import React, { useState } from 'react';
import * as Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setKey("AIzaSyA8RoMcKEBBnTIHOkCdQN4AmHONLCRbmDg");

function Geolocation() {
    const [address, setAddress] = useState("Maroullena");
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

    const handleAddress = () => {
        // Get latitude & longitude from address.
        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                setCoordinates({ lat, lng });
            },
            error => {
                console.error(error);
            }
        );
    };

    return (
        <div>
            <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <button onClick={handleAddress}>Find coordinates</button>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
        </div>
    );
}

export default Geolocation;
