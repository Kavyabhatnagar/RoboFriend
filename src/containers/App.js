import React, { Component } from 'react';
// import {robots} from './Robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component{
  constructor()
  {
    super();
    this.state={
      robots:[],
      searchfields: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({robots:users}));
  }
  onSearchChange=(event)=>
  {
    this.setState({ searchfields :event.target.value});
  }
  render(){
    const {searchfields,robots} = this.state;
    const filterRobots=robots.filter(robot=>{
      return robot.name.toLowerCase().includes(searchfields.toLowerCase());
    })
  return !robots.length?
   <h1 className='tc'>LOADING</h1>:

    <div className='tc'>
    <h1 className='f1'>RoboFriends</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
      <CardList robots={filterRobots}/>
      </Scroll>  
    </div> 
    }
  }

export default App;
