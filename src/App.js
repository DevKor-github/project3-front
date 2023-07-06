import React from 'react';
import Map from './Map';
import Nav from './Nav';

function MyPage() {
  return (
    <div>
      <Map/>
      <Nav/>
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