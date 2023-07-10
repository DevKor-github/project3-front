import React, { useEffect, useState } from 'react'
<<<<<<< Updated upstream
<<<<<<< HEAD
import { GoogleMap, useJsApiLoader, Marker , InfoWindow} from '@react-google-maps/api';
=======
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import MyLocation from './Nav';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of afabd31 (home intial setting)
=======
>>>>>>> parent of afabd31 (home intial setting)
=======
>>>>>>> parent of afabd31 (home intial setting)
=======
import { GoogleMap, useJsApiLoader, Marker , OverlayView } from '@react-google-maps/api';
>>>>>>> Stashed changes


const containerStyle = {
  width: '375px',
  height: '500px',
};

function Map() {
  
  const [center, setCenter] = useState(null);
  const [map, setMap] = useState(null);
<<<<<<< HEAD
  const [markers, setMarkers] = useState([]);
 
=======
  
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

>>>>>>> parent of afabd31 (home intial setting)
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

  const LabeledMarker = ({ label, icon, position }) => {
    const getPixelPositionOffset = (width, height) => ({
      x: -(width / 2),
      y: -(height / 2),
    });
  
    return (
      <>
        <OverlayView
          position={position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}
        >
          <div style={{ background: "white", border: "1px solid black", padding: "2px 4px" }}>
            {label}
          </div>
        </OverlayView>
        <Marker
          icon={icon}
          position={position}
        />
      </>
    );
  };

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {localCenter && customMarker && <Marker position={localCenter} icon={customMarker} />}
<<<<<<< Updated upstream
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
=======
        {center && customMarker && <Marker position={center} icon={customMarker} />}
>>>>>>> parent of afabd31 (home intial setting)
=======
        {center && customMarker && <Marker position={center} icon={customMarker} />}
>>>>>>> parent of afabd31 (home intial setting)
=======
        {center && customMarker && <Marker position={center} icon={customMarker} />}
>>>>>>> parent of afabd31 (home intial setting)
=======
        <LabeledMarker
    label="14"
    icon={{
      url : "Cafe.png",
      scaledSize: new window.google.maps.Size(45.8, 64)
    }}
    position={{ lat: 37.544709 , lng: 126.968892 }}
  />
        <LabeledMarker
    label="83"
    icon={{
      url : "Restaurant.png",
      scaledSize: new window.google.maps.Size(45.8, 64)
    }}
    position={{ lat: 37.542305 , lng: 126.964535 }}
  />
        <LabeledMarker
    label="9"
    icon={{
      url : "Hotel.png",
      scaledSize: new window.google.maps.Size(45.8, 64)
    }}
    position={{ lat: 37.582385 , lng: 127.028430 }}
  />
          <LabeledMarker
    label="113"
    icon={{
      url : "Dessert.png",
      scaledSize: new window.google.maps.Size(45.8, 64)
    }}
    position={{ lat: 37.587088 , lng: 127.029423 }}
  />
>>>>>>> Stashed changes
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map)
