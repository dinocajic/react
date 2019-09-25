import React from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * Ran:
 *   npm install axios
 *   npm install --save bootstrap
 */
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      loaded: false
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {

    return (
      <div className="container-fluid">
        {
          (!this.state.loaded)
            ? <p>Loading</p>
            : this.state.results.map(result => 
                <div key={result.id}>
                  <h2>{result.title}</h2>
                  <p>{result.body}</p>
                  <p>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={ () => this.removeItem(result.id) }
                    >
                      Remove Item
                    </button>
                  </p>
                </div>
            )
        }
      </div>
    );
  }

  removeItem = (id) => {
    const updatedResults = this.state.results.filter(result => result.id !== id);

    this.setState({
      results: updatedResults
    });
  }

  getPosts = () => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then( result => {
        this.setState({results: result.data, loaded: true})
      })
      .catch( error => console.error(error) )
  }
}

export default App;
