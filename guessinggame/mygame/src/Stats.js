import React from 'react';

//stats for the game 
function Stats(props) {

    return (
      <div className="stats">
         <h2> Stats </h2>
         <h3>Level:{props.level}</h3>
          <ul>
            <li>Guess Attempt:{props.guess}</li>
            <li> Standard Highscore:{props.standard}</li>
            <li>Expert Highscore: {props.expert}</li>
          </ul>
      </div>
    )
} 



export default  Stats;
