import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import { SearchBox } from './components/searchBox/Search';
import { setSearchField } from './redux/search-reducer/search.action';
import { fetchMonsters } from './redux/monsters.reducer/monster.action';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidMount(){
    this.props.fetchMonsters();
  }
  render(){

    const { setSearchField, searchField, monsters, isLoading } = this.props;
    const searchFilter = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return isLoading ?
    <h1>Is Loading ...</h1>
    :
    (
      <div className="App">
        <h1>monsters relodex</h1>
        <SearchBox 
          placeholder='search your robo' 
          handleSearch={setSearchField}
        />
        <CardList monsters = {searchFilter} />
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setSearchField: event => dispatch(setSearchField(event.target.value)),
  fetchMonsters: ()=> dispatch(fetchMonsters())
})

const mapStateToProps = state => ({
  searchField: state.search.searchField,
  isLoading: state.monster.isLoading,
  monsters: state.monster.monsters
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
