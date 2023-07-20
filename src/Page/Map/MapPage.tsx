import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker';
import CenterMarker from './CenterMarker';

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
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: 37.544424, lng: 126.968567 }} icon={{ url: "/Cafe.png" }} reviews={20} />
        <Marker position={{ lat: 37.543536, lng: 126.957438 }} icon={{ url: "/Icecream.png" }} reviews={3} />
        <Marker position={{ lat: 37.584305, lng: 127.021857 }} icon={{ url: "/Donut.png" }} reviews={144} />
        <Marker position={{ lat: 37.588234, lng: 127.029899 }} icon={{ url: "/Theater.png" }} reviews={55} />
        <CenterMarker position={center} />
        <></>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default MapPage;
