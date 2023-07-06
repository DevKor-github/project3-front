import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import MyLocation from './Nav';


const containerStyle = {
  width: '375px',
  height: '500px',
};

function Map() {
  
  const [center, setCenter] = useState(null);
  const [map, setMap] = useState(null);
  
  useEffect(() => {
    // 유저 현재 위치 정보 받기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log("브라우저가 위치 정보를 지원하지 않습니다.");
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDLOzTtnOt6I8eJjfpxkvzzWNy5AHx3dVM"
  })

  const onLoad = React.useCallback(function callback(map) {
    if(center) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    }
    setMap(map)
  }, [center])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  
  const customMarker = isLoaded ? {
    scaledSize: new window.google.maps.Size(200, 200),
  } : null;

  return isLoaded ? (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
      >
        {center && customMarker && <Marker position={center} icon={customMarker} />}
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map)
