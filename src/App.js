import React, { Component } from 'react';
import Notebook from './components/Notebook';
import AddEntry from './components/AddEntry';
import io from 'socket.io-client';
import 'semantic-ui-css/semantic.min.css';

import { Container } from 'semantic-ui-react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: false,
      characters: [
        {
          'id': 1,
          'date': new Date().toLocaleString(),
          'name': 'Charlie',
          'caseName': 'Pre-Election',
          'entry': 'Testing of pre-election is completed.'
        },
        {
          'id': 2,
          'date': new Date().toLocaleString(),
          'name': 'Mac',
          'caseName': 'Election',
          'entry': 'Testing of election is completed.'
        },
        {
          'id': 3,
          'date': new Date().toLocaleString(),
          'name': 'Dee',
          'caseName': 'Post-Election',
          'entry': 'Testing of post-election is completed.'
        }
      ]
    }
  }

  componentDidMount() {
    const socket = io('http://localhost:4000');
    socket.on('connect', () => {
      this.setState({ data: true });
    });
  }

  removeCharacter = index => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  onSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  render() {
    return (
      <Container>
        <Notebook
          characters={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <AddEntry onSubmit={this.onSubmit}/>
      </Container>
    );
  }
  
}

export default App;