import React from 'react';
import './App.css';
import { ListOfCharacters } from './ListOfCharacters';
import Skeleton from './Skeleton'
function App() {
  return (
    <div className="App">
      {/* <Skeleton/> */}
      <ListOfCharacters/>
    </div>
  );
}

export default App;
