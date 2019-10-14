import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent'
import Blog from './components/Blog'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input: '', 
      pancakeURL: ''
    }
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  showAPancake(){
    this.setState({
      pancakeURL: 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2018%2F12%2F8cfbcbb2919742682345681d469b7417a73e4dfe.jpeg'
    })
  }

  render(){
    
    return (
      <div className="App">
        <input onChange={(event) => this.handleChange(event)}/>
        <h1>{this.state.input}</h1>
        <button onClick={()=> this.showAPancake()}>Click for pancakes</button>
        <br></br>
        <img src={this.state.pancakeURL}/>
        <hr/>
        <Parent/>
        <hr></hr>
        <Blog/>
      </div>
    );
  }
}

// export default App;
