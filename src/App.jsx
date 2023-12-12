import React from 'react';
import Nav from './components/Nav';
import ProfileDiv from './components/profileDiv';
import Body from './components/Body/body';

const App = () => {
  return (
    <div className='bodyHeader'>
      <header>
        <h2>TTW</h2>
        <Nav />
        <ProfileDiv />
      </header>
      <Body />
    </div>
  );
}

export default App;
