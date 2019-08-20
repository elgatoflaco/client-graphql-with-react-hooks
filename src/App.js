import React from 'react';
import './App.css';
import { ListOfCharacters } from './ListOfCharacters';
import { SingleCharacter } from './SingleCharacter';
import Skeleton from './Skeleton'
function App() {
  return (
    <div className="App">
      {/* <Skeleton/> */}
      <SingleCharacter id={2}/>
      {/* <ListOfCharacters/> */}
    </div>
  );
}

export default App;
