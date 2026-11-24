import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/services/ServicePage";
import { services } from "./data/services";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {services.map((s) => <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage key={s.slug} slug={s.slug} />} />)}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
