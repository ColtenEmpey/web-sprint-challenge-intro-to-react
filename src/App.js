import React, {useState, useEffect} from 'react';
import Character from "./components/Character"

const App = () => {
  
  const [details, setDetails] = useState("")
  const [active, setActive] = useState("")
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // const postData = (arr) =>{
  //   arr.map( char =>{
  //     setCharacter(char.name)
      
  //   })
  // }
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Character/>
    </div>
  );
}

export default App;
