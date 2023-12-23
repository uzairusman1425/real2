import React, { useState, useContext, useEffect } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import UserContext from '../../context/Usercontext';
import { useRef } from 'react';

const MapContainer = () => {
    const [center, setCenter] = useState({ lat: 40.749933, lng: -73.98633 });
    const [markerPosition, setMarkerPosition] = useState(null);
    const [location, setLocation] = useState('')
    const autocompleteRef = useRef(null);
    const { setName, setUpdateLat } = useContext(UserContext)


    const handlePlaceSelect = () => {
        const place = autocompleteRef.current.getPlace();

        if (place.geometry) {
            setCenter({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            });

            setMarkerPosition({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            });
        }
        setLocation(place.address_components[0].long_name)

    };
    useEffect(() => {

        setUpdateLat({
            lat: center.lat,
            lng: center.lng
        });
        setName(location)
    }, [center])
    return (
        <LoadScript googleMapsApiKey="AIzaSyA8RoMcKEBBnTIHOkCdQN4AmHONLCRbmDg" libraries={["places"]}>
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={center}
                zoom={13}
            >
                {markerPosition && <Marker position={markerPosition} />}
                <Autocomplete
                    onLoad={(autocomplete) => {

                        autocompleteRef.current = autocomplete;
                    }}
                    onPlaceChanged={handlePlaceSelect}
                >
                    <input
                        type="text"
                        placeholder="Search places..."
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-120px',
                        }}
                    />
                </Autocomplete>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
