import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker';
import CenterMarker from './CenterMarker';
import { markers } from './MarkerManage';

const containerStyle = {
  width: '390px',
  height: '700px',
};

interface MapPageProps {
  googleMapsApiKey: string;
}

const MapPage: React.FC<MapPageProps> = ({ googleMapsApiKey }) => {
  const [center, setCenter] = useState<{lat: number, lng: number} | null>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleMapsApiKey,
  });


  const onLoad = React.useCallback(
    function callback(map: google.maps.Map | null) {
      if (map && center) {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(center);
        map.fitBounds(bounds);
      }

      setMap(map);
    },
    [center]
  );

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);


  return isLoaded && center ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >

        {markers.map((marker, index) => (
        <Marker
        key={index}
        position={marker.position}
        icon={marker.icon}
        reviews={marker.reviews}
      />
      ))}
        <CenterMarker position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapPage;
