import React, { useState } from 'react';
import Map from './Map';
import Nav from './Nav';

function MyPage() {
  const [center, setCenter] = useState(null);

  const updateCenter = (newCenter) => {
    setCenter(newCenter);
  };

  return (
    <div>
      <Map center={center} updateCenter={updateCenter}/>
      <Nav updateCenter={updateCenter}/>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <MyPage/>
    </div>
  );
}

export default App;
