import React from 'react';
import { Marker as GoogleMarker } from '@react-google-maps/api';

interface CenterMarkerProps {
    position: {
      lat: number;
      lng: number;
    };
};

const CenterMarker: React.FC<CenterMarkerProps> = ({ position }) => { 
    return (
      <GoogleMarker
        position={position}
        icon={{ 
          url: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png", // Use a sample marker icon url, replace it with your own if needed
          size: new google.maps.Size(30, 30),
        }}
      />
    );
  };

  export default CenterMarker;