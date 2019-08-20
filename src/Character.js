import React from 'react';
import { SingleCharacter } from './SingleCharacter';
function App(props) {
    console.log(props)
  return (
    <div className="App">
      <SingleCharacter id={props.id}/>
    </div>
  );
}

export default App;
