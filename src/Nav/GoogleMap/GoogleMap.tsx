import React from 'react';

interface GoogleMapProps {
  setCurrentPage: (page: string) => void;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ setCurrentPage }) => {
  return (
    <div onClick={() => setCurrentPage('map')}>
      <h1>Map</h1>
    </div>
  );
};

export default GoogleMap;