import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // This run first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
   
  // This run third
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  // This run second
  render() {
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return <div className="App">
      <SearchBox 
        className= 'search-box'
        onChangeHandler={onSearchChange} 
        placeholder= 'search monsters' 
      />
      <CardList monsters={filteredMonsters} />
    </div>;
  }
}

export default App;
