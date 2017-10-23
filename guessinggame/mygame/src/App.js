import React, { Component } from 'react';
import './App.css';
import UserChoice from './UserChoice';
import InputBox from './InputBox';
import Stats from './Stats';
class App extends Component {
  //constructor to call inital state
  constructor() {
    //super to use this inside of class if no super this = undefined
    super();

    this.userInput = this.userInput.bind(this);

    this.state = {
      userGuess:'',
      guessMade:[],
      standardHigh:0,
      expertHigh:0,
      correctNum:0,
      gameMode: ''
    }
  }
  standard =()=>{
    let randomNum = Math.floor(Math.random() * 10);

    this.setState({
      correctNum: randomNum,
      gameMode: 'Standard'
    });
  }
  expert =()=>{
    let randomNum = Math.floor(Math.random() * 100);

    this.setState({
      correctNum: randomNum,
      gameMode: 'Expert',
   });
  }

  userInput(props){
    let guess = props.target.value;

    this.setState({
      userGuess: guess,
    });
  }
//deals with hints pushing into new array and new highscore
  handleUserInput =()=>{
    let state = Object.assign({}, this.state);
    let gameMode = state.gameMode
    //array
    let totalGuess = state.guessMade;
    let correctNum = state.correctNum
    let guess = state.userGuess
    let userHighScore = state.guessMade.length;
    let oldHighScore = state.expertHigh;
    let oldStandardScore = state.standardHigh

    totalGuess.push(guess);

    this.setState({
      guessMade:totalGuess,
    });
      //expert game mode check

    if (correctNum == guess && gameMode == "Expert") {
      alert("we Have a winner");

      if (userHighScore > oldHighScore && oldHighScore === 0) {
        this.setState({
          expertHigh: userHighScore + 1,
          guessMade: []
        });

        alert("NEW HIGSCORE");
      }
      if (oldHighScore > userHighScore ) {
        this.setState({
          expertHigh: userHighScore + 1,
          guessMade: []
        });

        alert("SET NEW HIGSCORE");
      }
    }

//=========END OF EXPERT CHECK =======

    //standard game mode check
    if (correctNum == guess && gameMode == "Standard") {
      alert("we Have a winner");

      if (userHighScore > oldHighScore && oldHighScore === 0) {
        this.setState({
          standardHigh: userHighScore + 1,
          guessMade: []
        });
        alert("NEW HIGSCORE");
      }
      if (oldStandardScore > userHighScore) {
        this.setState({
          standardHigh: userHighScore + 1,
          guessMade: []
        });
        alert("SET NEW HIGSCORE");
      }
    }
//checks if current user is close to
    if (correctNum > guess) {
      alert("The answer is Greater");
    } else if (correctNum < guess) {
      alert("The answer is Less ");
    }

//=========END OF STANDARD CHECK =======

  }
// goes back to inital state
  restart =()=>{
    this.setState({
      userGuess:'',
      guessMade:[],
      standardHigh:0,
      expertHigh:0,
      correctNum:0,
      gameMode: ''
    });
  }

  render() {
    return (
      <div className="App">
       <UserChoice
          standard={this.standard}
          expert={this.expert}
          restart={this.restart}
        />
        <InputBox
           userInput={this.userInput}
           HandleUserInput={this.handleUserInput}
         />
         <Stats
            guess={this.state.guessMade.length}
            Standard={this.state.standardHigh}
            Expert={this.state.expertHigh}
            level={this.state.gameMode}
         />
      </div>
    );
  }
}

export default App;
