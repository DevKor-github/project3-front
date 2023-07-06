import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker , InfoWindow} from '@react-google-maps/api';


const containerStyle = {
  width: '375px',
  height: '500px',
};

function Map({ center, updateCenter }) {
  
  const [localCenter, setLocalCenter] = useState(center);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDLOzTtnOt6I8eJjfpxkvzzWNy5AHx3dVM"
  })
  
  useEffect(() => {
    if (center === null && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const initialCenter = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocalCenter(initialCenter);
        updateCenter(initialCenter);
      });
    } else if(center !== localCenter){
      setLocalCenter(center);
    }

    if (isLoaded) {
      setMarkers([
        {
          position: { lat: 37.544709 , lng: 126.968892 },
          icon: {
            url: "Cafe.png",
            scaledSize: new window.google.maps.Size(45.8, 64)
          },
          number: 12
        },
        {
          position: { lat: 37.542305 , lng: 126.964535 },
          icon: {
            url: "Restaurant.png",
            scaledSize: new window.google.maps.Size(45.8, 64)
          },
          number: 34
        },
        {
          position: { lat: 37.582385 , lng: 127.028430 },
          icon: {
            url: "Hotel.png",
            scaledSize: new window.google.maps.Size(45.8, 64)
          },
          number: 4
        },
        {
          position: { lat: 37.587088 , lng: 127.029423 },
          icon: {
            url: "Dessert.png",
            scaledSize: new window.google.maps.Size(45.8, 64)
          },
          number: 8
        }
      ]);
    }
  }, [center, updateCenter, localCenter, isLoaded]);

  const onLoad = React.useCallback(function callback(map) {
    if(localCenter) {
      map.setCenter(localCenter);
    }
  }, [localCenter]);

  const onUnmount = React.useCallback(function callback(map) {
    setLocalCenter(null)
  }, [])

  const customMarker = isLoaded ? {
    scaledSize: new window.google.maps.Size(200, 200),
  } : null;

  return isLoaded ? (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={localCenter}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
      >
        {localCenter && customMarker && <Marker position={localCenter} icon={customMarker} />}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={marker.icon}
          >
            <InfoWindow>
              <div>{marker.number}</div>
            </InfoWindow>
          </Marker>
        ))}
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map)