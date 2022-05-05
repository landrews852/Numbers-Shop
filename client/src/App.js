import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart';
import Home from './pages/home';
import MyCarts from './pages/myCarts';

export default function App() {
  return (
    // <BrowserRouter key={Math.random()}>
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mycarts" element={<MyCarts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
