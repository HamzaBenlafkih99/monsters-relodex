import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/searchBox/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [], 
      searchField: ''
    }
  }
  handleSearch = event =>{
    this.setState({ searchField: event.target.value });
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ monsters: users }));
  }
  render(){

    const { monsters, searchField } = this.state;
    const searchFilter = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>monsters relodex</h1>
        <SearchBox 
          placeholder='search your robo' 
          handleSearch={this.handleSearch}
        />
        <CardList monsters = {searchFilter} />
      </div>
    );
  }
  
}

export default App;
