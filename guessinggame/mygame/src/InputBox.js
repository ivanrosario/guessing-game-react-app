import React from 'react';
import PropTypes from 'prop-types';

//the input
function InputBox(props) {


    return (
      <div >
        <div className="Guess">
          <h2>Input Answer</h2>
          <input type="number"  name="Guess" onChange={props.userInput}  />
          <button id="addBtn" onClick={props.HandleUserInput}>Add</button>
        </div>
      </div>
    )
}
InputBox.propTypes = {
  handleUserInput: PropTypes.func,
  userInput: PropTypes.func,

};


export default  InputBox;
