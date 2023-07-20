import React from 'react';
import { Marker as GoogleMarker } from '@react-google-maps/api';

interface MarkerProps {
    position: {
      lat: number;
      lng: number;
    };
    icon: {
      url: string;
    };
    reviews : number;
  }

const Marker: React.FC<MarkerProps> = ({ position, icon, reviews }) => {
  return (
    <GoogleMarker 
      position={position}
      icon={{ 
        url: icon.url,
        scaledSize: new google.maps.Size(60,60),
    }}
      label={reviews.toString()}
    />
  );
};

  
  export default Marker;