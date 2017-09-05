import React, { Component } from 'react';
import './App.css';
import UserChoice from './UserChoice';
import InputBox from './InputBox';
import Stats from './Stats';
class App extends Component {
    constructor() {
    super();
    this.Expert = this.Expert.bind(this);
    this.Standard = this.Standard.bind(this);
    this.UserInput = this.UserInput.bind(this);
    this.HandleUserInput = this.HandleUserInput.bind(this);
    this.Restart = this.Restart.bind(this);

    this.state = {
      userGuess:'',
      guessMade:[],
      standardHigh:0,
      experHigh:0,
      CorrectNum:0,
    }
    }
  Standard(){
   var randomNum = Math.floor(Math.random() * 10);
   this.setState({
     CorrectNum: randomNum
   })
  }
  Expert(){
   var randomNum = Math.floor(Math.random() * 100);
   this.setState({
     CorrectNum: randomNum
   })
  }

  UserInput(props){
     let guess = props.target.value;
    this.setState({
      userGuess: guess,
    });
  }
//deals with hints pushing into new array and new highscore
 HandleUserInput(){
  var totalGuess = this.state.guessMade;
  var Expert = this.state.CorrectNum
  var guess = this.state.userGuess
  var expertHigh = this.state.guessMade.length;
  var oldHighScore = this.state.experHigh
  var newscore = this.state.guessMade.length;
  totalGuess.push(this.state.userGuess);
  this.setState({
    guessMade:totalGuess,
  })
  if(Expert == guess){
    alert('we Have a winner')
    if(expertHigh > oldHighScore ){  
      this.setState({
        experHigh:expertHigh,
        guessMade:[]
      })
      alert("NEW HIGSCORE");
      if(expertHigh > newscore){
        this.setState({
        experHigh:newscore
      })
       alert("NEWfdd HIGSCORE");
      }
    }
  }
  if(Expert > guess){
    alert('The answer is Greater')
  }
  if(Expert < guess){  
    alert('The answer is Less ')
  }

 }
// goes back to inital state
Restart(){
  this.setState({
       userGuess:'',
      guessMade:[],
      standardHigh:0,
      experHigh:0,
      CorrectNum:0,
  });

}
 

  
  render() {
    return (
      <div className="App">
       <UserChoice 
       Standard={this.Standard}
       Expert={this.Expert}
       Restart={this.Restart}
        />
        <InputBox
         UserInput={this.UserInput} 
         HandleUserInput={this.HandleUserInput}
         />
         <Stats 
         guess={this.state.guessMade.length}
         Standard={this.state.standardHigh}
         Expert={this.state.experHigh}
         />
      </div>
    );
  }
}

export default App;
