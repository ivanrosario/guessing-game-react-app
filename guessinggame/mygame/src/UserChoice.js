import React from 'react';
import PropTypes from 'prop-types';

//header for the game
function UserChoice(props) {


    return (
      <div>
        <div className="header">
          <h1>Start Game</h1>
          <button  onClick={props.standard}>Standard</button>
          <button onClick={props.expert}>Expert</button>  
          <button onClick={props.restart}>Restart</button>
        </div>
      </div>
    )
} 
 UserChoice.propTypes = {
   standard: PropTypes.func,
   expert: PropTypes.func,
   restart: PropTypes.func,

};


export default UserChoice;
