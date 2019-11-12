import React from 'react';

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col">Date/Time</th>
        <th scope="col">Test Engineer(s)</th>
        <th scope="col">Test Case Name</th>
        <th scope="col">Entry</th>
        <th scope="col">Test Artifacts</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );
}

export default TableHeader;
