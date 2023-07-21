import React from 'react';

interface WriteProps {
  setCurrentPage: (page: string) => void;
}

const Write: React.FC<WriteProps> = ({ setCurrentPage }) => {
  return (
    <div onClick={() => setCurrentPage('write')}>
      <img 
        src="/Write.png" 
        alt="Write" 
        style={{width: "90px", height: "90px", cursor: "pointer"}} 
      />
    </div>
  );
};

export default Write;