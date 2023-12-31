import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function index() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
