import React from 'react';

interface MapNavigationProps {
  setCurrentPage: (page: string) => void;
}

const MapNavigation: React.FC<MapNavigationProps> = ({ setCurrentPage }) => {
  return (
    <div onClick={() => setCurrentPage('mappage')}>
      <img 
        src="/MapNavigation.png" 
        alt="MapNavigation" 
        style={{width: "90px", height: "90px", cursor: "pointer"}} 
      />
    </div>
  );
};

export default MapNavigation;