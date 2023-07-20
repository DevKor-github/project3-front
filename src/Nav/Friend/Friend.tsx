import React from 'react';

interface FriendProps {
  setCurrentPage: (page: string) => void;
}

const Friend: React.FC<FriendProps> = ({ setCurrentPage }) => {
  return (
    <div onClick={() => setCurrentPage('friend')}>
      <img 
        src="/Friend.png" 
        alt="Friend" 
        style={{width: "90px", height: "90px", cursor: "pointer"}} 
      />
    </div>
  );
};

export default Friend;