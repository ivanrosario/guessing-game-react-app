import React from 'react';
import PropTypes from 'prop-types';

//the input
function InputBox(props) {


    return (
      <div >
        <div className="Guess">
          <h2>Input Answer</h2>
          <input type="text"  name="Guess" onChange={props.UserInput}  />
          <button id="addBtn" onClick={props.HandleUserInput}>Add</button>
        </div>
      </div>
    )
} 
InputBox.propTypes = {
   HandleUserInput: PropTypes.func,
  UserInput: PropTypes.func,

};


export default  InputBox;
