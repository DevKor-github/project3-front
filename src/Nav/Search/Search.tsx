import React from 'react';

interface SearchProps {
  setCurrentPage: (page: string) => void;
}

const Search: React.FC<SearchProps> = ({ setCurrentPage }) => {
  return (
    <div onClick={() => setCurrentPage('search')}>
      <img 
        src="/Search.png" 
        alt="Search" 
        style={{width: "90px", height: "90px", cursor: "pointer"}} 
      />
    </div>
  );
};

export default Search;