import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Accomodation from './pages/services/Accomodation';
import Home from './pages/Home';
import AirTickets from './pages/services/AirTickets';
import Transport from './pages/services/Transport';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/accommodation' element={<Accomodation/>} />
            <Route path='/air-tickets' element={<AirTickets/>} />
            <Route path='/transfer-service' element={<Transport/>} />
            <Route path='/visa' element={<Transport/>} />
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
