import React from 'react';
import Header from './components/Header.jsx';
import Filtr from './components/Filtr.jsx';
import Card from './components/Card.jsx';

export default function App() {
  return (
    <>
    <Header />
    <Filtr />
    <div className="list">
      <Card />
    </div>
    </>
  )
}