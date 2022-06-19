import React from 'react';
import Header from './components/Header.jsx';
import Filtr from './components/Filtr.jsx';
import Card from './components/Card.jsx';
import data from './data/books'
import Group from './components/Group.jsx';

export default function App() {




  return (
    <>
    <Header />
    <Filtr />
    <div className="content">
      <div className="list">
        {
          data.map((data) => <Card data={data}/>)
        }
      </div>
      <div className="groups">
        <Group title="Лучшие серии" item_1="Срыв 2" id={'#2'}/>
      </div>
    </div>
    </>
  )
}