import React, { Component } from 'react';
import FirstComponent from './components/learning-components/FirstComponent'
import SecondComponent from './components/learning-components/SecondComponent'
import ThirdComponent from './components/learning-components/ThirdComponent'
import {Counter} from './components/counter/Counter'
import './App.css';
class App extends Component
{
  render()
  {
    return(
      <div className="App">
       <Counter/>
      </div>
    );
  }
}

// eslint-disable-next-line
class LearningComponent extends Component
{
  render(){
    return(
      <div className="LearningComponent">
         My Hello World
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>

    )
  }
}











export default App;
