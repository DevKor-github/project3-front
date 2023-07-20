import React from 'react';
import Friend from './Friend/Friend';
import Search from './Search/Search';
import Write from './Write/Write';
import MapNavigation from './MapNavigation/MapNavigation';
import './Nav.css';

interface NavProps {
  setCurrentPage: (page: string) => void;
}

const Nav: React.FC<NavProps> = ({ setCurrentPage }) => {
  return (
    <div className="Nav-container">
      <Search setCurrentPage={setCurrentPage} />
      <Write setCurrentPage={setCurrentPage} />
      <Friend setCurrentPage={setCurrentPage} />
      <MapNavigation setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Nav;