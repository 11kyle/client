import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

import { Table } from 'semantic-ui-react';

class Notebook extends Component {
  render() {
    return (
      <Table>
        <TableHeader />
        <TableBody
          characters={this.props.characters}
          removeCharacter={this.props.removeCharacter}
        />
      </Table>
    );
  }
}

export default Notebook;
