import React from 'react';
import './App.css';

import Child from './Components/Child';

class App extends React.Component {

  state = {
    name: "Dino"
  }

  changeName = () => {
    this.setState(prevState => {
      return (
        prevState.name === "Dino" 
          ? { name: "Frank" }
          : { name: "Dino" }
      );
    });
  }

  render() {

    return (
      <div>
        <Child 
          name={this.state.name} 
          clickMe={() => this.changeName()}
        />
      </div>
    );
  }
}

export default App;
