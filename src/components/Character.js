// Write your Character component here
import axios from "axios"
import React, {useState, useEffect} from 'react';

const Character = () =>{
    const [characters, setCharacters] = useState([])
    useEffect(() =>{
        axios.get("https://swapi.dev/api/people/")
        .then( res=>{
            const returnArray = res.data
            console.log(returnArray)
            setCharacters(returnArray)
            // returnArray.map( char =>{

            //     setCharacter(char.name)
            //     return character
            // })
        })
        .catch(err => {
            console.error(err)
        })
    },[])

    const listItems = characters.map((character, index) => (
      <div class="accordion-item" key={`accordion${index}`}>
        <h2 class="accordion-header" id={`heading${index}`}>
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${index}`}
            aria-expanded= {index === 0 ? "true" : "false"}
            aria-controls={`collapse${index}`}
          >
            {character.name}
          </button>
        </h2>
        <div
          id={`collapse${index}`}
          class="accordion-collapse collapse show"
          aria-labelledby={`heading${index}`}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
                Gender: {character.gender} <br />
                Height: {character.height} <br />
                Hair Color: {character.hair_color} <br />
                Eye Color: {character.eye_color} <br />
            </p>
          </div>
        </div>
      </div>
    ));
    
            
            // <div>{character.name}</div>
        
    
    console.log(characters)
    return (
        <div class="accordion" id="charcters">
        {listItems}
        </div>
    )
} 


export default Character