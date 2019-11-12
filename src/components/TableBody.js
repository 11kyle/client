import React from 'react';

import { Button } from 'semantic-ui-react';

const TableBody = (props) => {
  const rows = props.characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.name}</td>
        <td>{row.caseName}</td>
        <td>{row.entry}</td>
        <td>{row.artifact}</td>
        <td>
          <Button
            color='red'
            size='tiny'
            onClick={() => props.removeCharacter(index)}>
            Remove
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <tbody>{rows}</tbody>
  );
}

export default TableBody;
