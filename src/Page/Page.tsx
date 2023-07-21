import React from 'react';
import MapPage from './Map/MapPage';
import FriendPage from './Friend/FriendPage';
import SearchPage from './Search/SearchPage';
import WritePage from './Write/WritePage';
import './Page.css';

interface PageProps {
  currentPage: string;
}

const Page: React.FC<PageProps> = ({ currentPage }) => {
  return (
    <div className="Page-container">
      {currentPage === 'mappage' && <MapPage googleMapsApiKey="AIzaSyDLOzTtnOt6I8eJjfpxkvzzWNy5AHx3dVM"/>}
      {currentPage === 'friend' && <FriendPage />}
      {currentPage === 'search' && <SearchPage />}
      {currentPage === 'write' && <WritePage />}
    </div>
  );
};

export default Page;