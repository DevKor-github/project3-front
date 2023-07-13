import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

//hello 

const containerStyle = {
  width: '375px',
  height: '500px',
};

function Map() {
  
  const [localCenter, setLocalCenter] = useState(center);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const updateCenter = (newCenter) => {  
    setCenter(newCenter);
  }
  
    useEffect(() => {
      // 유저 현재 위치 정보 받기
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
    }, [center, updateCenter, localCenter]);

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
        {localCenter && customMarker && <Marker position={localCenter} icon={customMarker} />}
        <Marker
      icon={{
        url : "Cafe.png",
        scaledSize: new window.google.maps.Size(45.8, 64)
      }}
      position={{ lat: 37.544709 , lng: 126.968892 }}
    />
        <Marker
      icon={{
        url : "Restaurant.png",
        scaledSize: new window.google.maps.Size(45.8, 64)
      }}
      position={{ lat: 37.542305 , lng: 126.964535 }}
    />
        <Marker
      icon={{
        url : "Hotel.png",
        scaledSize: new window.google.maps.Size(45.8, 64)
      }}
      position={{ lat: 37.582385 , lng: 127.028430 }}
    />
        <Marker
      icon={{
        url : "Dessert.png",
        scaledSize: new window.google.maps.Size(45.8, 64)
      }}
      position={{ lat: 37.587088 , lng: 127.029423 }}
    />
      </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Map)
