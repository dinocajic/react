import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Main   from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  state = {
    header: {
      portfolio: "http://dinocajic.xyz/",
      github: "https://github.com/dinocajic",
      linkedin: "https://www.linkedin.com/in/dinocajic/"
    }
  };

  componentDidMount() {
    document.title = "Recipes";
  }

  render() {
    return (
      <div>
        <Header 
          header={this.state.header}
        />
        <Main />
        <Footer />
      </div>
    );
  }

}

export default App;
