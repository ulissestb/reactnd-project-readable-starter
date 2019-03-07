import React, { Component } from 'react';
import Header from "./components/Header"
import SinglePost from './components/SinglePost'
import Post from './components/Post'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Post />
      </div>
    );
  }
}

export default App;
