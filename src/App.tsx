import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'


type myState = string[];

type myAction = {
  type: string;
  text: string;
}

function Todo(state: myState = [], action: myAction){
switch(action.type){
  case 'ADD_Todo':
    return [...state, action.text];
  default:
    return state;
}
}

const mystore = createStore(Todo, ["Getting up"]);

mystore.dispatch({
  type: 'ADD_Todo',
  text: 'Going to work'
})
console.log(mystore.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
