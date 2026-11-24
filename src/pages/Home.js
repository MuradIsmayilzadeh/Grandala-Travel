import React from 'react';
import './Home.css';
import Slider from '../components/Slider';
import XidmetlerPage from '../components/Xidmetler';
function Home() {
  return (
    <div className="home">
      <Slider />
      <div className='footer'>
      <XidmetlerPage/>
      </div>
    </div>
  );
}

export default Home;
