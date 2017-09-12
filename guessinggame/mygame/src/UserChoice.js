import React from 'react';
import PropTypes from 'prop-types';

//header for the game
function UserChoice(props) {


    return (
      <div>
        <div className="header">
          <h1>Start Game</h1>
          <button  onClick={props.Standard}>Standard</button>
          <button onClick={props.Expert}>Expert</button>  
          <button onClick={props.Restart}>Restart</button>
        </div>
      </div>
    )
} 
 UserChoice.propTypes = {
   Standard: PropTypes.func,
   Expert: PropTypes.func,
   Restart: PropTypes.func,

};


export default UserChoice;
