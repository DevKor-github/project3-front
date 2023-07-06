import React from 'react';

function Search() {
    return (
        <div style={{ flex: 1 }}>
            <button style={{ background: 'none', border: 'none' , cursor: 'pointer' }} onClick={() => alert('검색창이 뜨도록 할 것')}>
            <img style={{width: 70 , height:70}} alt="검색" src="Search.png"/>
            </button>
        </div>
    );
}

function Write() {
    return (
        <div style={{ flex: 1 }}>
            <button style={{ background: 'none', border: 'none' ,cursor: 'pointer'}} onClick={() => alert('작성창이 뜨도록 할 것')}>
            <img style={{width: 70 , height:70}} alt="글 작성"src="Write.png"/>
            </button>
        </div>
    );
}

function Friend() {
    return (
        <div style={{ flex: 1 }}>
            <button style={{ background: 'none', border: 'none' , cursor: 'pointer' }} onClick={() => alert('친구창이 뜨도록 할 것')}>
            <img style={{width: 70 , height:70}} alt="친구창" src="Friend.png"/>
            </button>
        </div>
    );
}

function MyLocation({ updateCenter }) {
    const handleClick = () => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          const newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          updateCenter(newCenter);
        });
      }
    }
  
    return (
      <div style={{ flex: 1 }}>
        <button style={{ background: 'none', border: 'none' , cursor: 'pointer' }} onClick={handleClick}>
          <img style={{width: 70 , height:70}} alt="내 위치" src="MyLocation.png"/>
        </button>
      </div>
    );
  }


function Nav({ updateCenter }) {
    const handleClick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          updateCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        console.log("브라우저가 위치 정보를 지원하지 않습니다.");
      }
    };
  
    return (
      <div style={{ 
          justifyContent: 'center', 
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row', 
          width:375, height:70,
          backgroundColor: 'rgba(128, 128, 128, 0.5)',
          boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.4)'}}>
          <Search/>
          <Write/>
          <Friend/>
          <MyLocation updateCenter={updateCenter}/>
      </div>
    );
  }
  
export default Nav;