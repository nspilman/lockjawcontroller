import React, { Component } from 'react';
import './App.css';
import Trigger from "./components/Trigger"
import no from "./audio/no1.wav"
import teef from "./audio/teef.wav"
import yeh from "./audio/yeh1.wav"
import yuh from "./audio/yuh1.wav"
import yuh2 from "./audio/yuh2.wav"
import lockjaw from "./audio/lockjaw.wav"
import nyuh from  "./audio/nyuh.wav"
import pbpa from "./audio/peopleBePullinAnd.wav"
import yah from  "./audio/yah.wav"
import noLong from "./audio/noLong1.wav"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      buttons :[
        {
          trigger:'q',
          audio:no,
          display:'no-o-oh'
        },
        {
          trigger:'w',
          audio:nyuh,
          display:'nyuh'
        },
        {
          trigger:'e',
          audio:yeh,
          display:'yAH'
        },
        {
          trigger:'a',
          audio:yuh,
          display:'yuh'
        },
        {
          trigger:'s',
          audio:yuh2,
          display:'YOOH'
        },
        {
          trigger:'d',
          audio:yah,
          display:'YAAA'
        },
        {
          trigger:'z',
          audio:lockjaw,
          display:'LOCKJAW'
        },
        {
          trigger:'x',
          audio:pbpa,
          display:'PBPA'
        },
        {
          trigger:'c',
          audio:teef,
          display:'teef'
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
      <div className = "text-center my-5">
        <h1 className = "text-light">LOCKJAW Audio Controller</h1>
        <h5 className ="text-light desktop">Use the Keyboard</h5>
      </div>
      <br/>
      <div className = "flexBox">
      <div className = "controller">
      {this.state.buttons.map(button =>{
       const  {trigger, audio, display} = button
        return(<Trigger trigger = {trigger} key={trigger} display = {display} audio = {audio}/>)
      })}
      </div>
      </div>
      </div>
    );
  }
}

export default App;
