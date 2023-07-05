import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '13212e2'
        },
        {
          name: 'Frank',
          id: '13212e122'
        },
        {
          name: 'Jacky',
          id: '1321'
        },
        {
          name: 'Andrei',
          id: '13212e2eee'
        }
      ]
    };
  }

  render() {
    return <div className="App">
      {this.state.monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })}
    </div>;
  }
}

export default App;
