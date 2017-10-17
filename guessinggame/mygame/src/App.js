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

    this.UserInput = this.UserInput.bind(this);

    this.state = {
      userGuess:'',
      guessMade:[],
      standardHigh:0,
      experHigh:0,
      CorrectNum:0,
      gamemode: ''
    }
  }
  standard =()=>{
    let randomNum = Math.floor(Math.random() * 10);

    this.setState({
       CorrectNum: randomNum,
      gamemode: 'Standard'
    });
  }
  expert =()=>{
    let randomNum = Math.floor(Math.random() * 100);

    this.setState({
     CorrectNum: randomNum,
     gamemode: 'Expert',
   });
  }

  UserInput(props){
    let guess = props.target.value;

    this.setState({
      userGuess: guess,
    });
  }
//deals with hints pushing into new array and new highscore
  HandleUserInput =()=>{
    let state = Object.assign({}, this.state);
    let gamemode = state.gamemode
    //array
    let totalGuess = state.guessMade;
    let CorrectNum = state.CorrectNum
    let guess = state.userGuess
    let userHighScore = state.guessMade.length;
    let oldHighScore = state.experHigh;
    let oldStandardScore = state.standardHigh

    totalGuess.push(this.state.userGuess);
    this.setState({
      guessMade:totalGuess,
    });
      //expert game mode check

    if (CorrectNum == guess && gamemode == "Expert") {
      alert("we Have a winner");

      if (userHighScore > oldHighScore && oldHighScore === 0) {
        this.setState({
          experHigh: userHighScore,
          guessMade: []
        });

        alert("NEW HIGSCORE");
      }
      if (oldHighScore > userHighScore ) {
        this.setState({
          experHigh: userHighScore
        });

        alert("SET NEW HIGSCORE");
      }
    }

//=========END OF EXPERT CHECK =======

    //standard game mode check
    if (CorrectNum == guess && gamemode == "Standard") {
      alert("we Have a winner");

      if (userHighScore > oldHighScore && oldHighScore === 0) {
        this.setState({
          standardHigh: userHighScore,
          guessMade: []
        });
        alert("NEW HIGSCORE");
      }
      if (oldStandardScore > userHighScore) {
        this.setState({
          standardHigh: userHighScore,
          guessMade: []
        });
        alert("SET NEW HIGSCORE");
      }
    }
//checks if current user is close to
    if (CorrectNum > guess) {
      alert("The answer is Greater");
    } else if (CorrectNum < guess) {
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
      experHigh:0,
      CorrectNum:0,
      gamemode: ''
    });
  }
 
  render() {
    return (
      <div className="App">
       <UserChoice 
          Standard={this.standard}
          Expert={this.expert}
          Restart={this.restart}
          level={this.state.gamemode}
        />
        <InputBox
           UserInput={this.UserInput} 
           HandleUserInput={this.HandleUserInput}
         />
         <Stats 
            guess={this.state.guessMade.length}
            Standard={this.state.standardHigh}
            Expert={this.state.experHigh}
            level={this.state.gamemode}
         />
      </div>
    );
  }
}

export default App;
