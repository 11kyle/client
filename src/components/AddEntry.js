import React, { Component } from 'react';

import { Form, Button } from 'semantic-ui-react';

class AddEntry extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      date: '',
      name: '',
      caseName: '',
      entry: '',
      artifact: '',
      anomaly: '',
      options: [
        { key: 'an', text: 'Alex Nestico', value: 'Alex Nestico' },
        { key: 'br', text: 'Ben Roberson', value: 'Ben Roberson' },
        { key: 'ca', text: 'Christian Alford', value: 'Christian Alford' },
        { key: 'df', text: 'Darrick Forester', value: 'Darrick Forester' },
        { key: 'jl', text: 'Jonathan Lee', value: 'Jonathan Lee' },
        { key: 'kj', text: 'Kyle Johnson', value: 'Kyle Johnson' },
        { key: 'ms', text: 'Mike Santos', value: 'Mike Santos' },
      ]
    };

    this.state = this.initialState;
  }

  handleChange = (e, { name, value }) => {
    this.setState({ 
      [name]: value,
      date: new Date().toLocaleString()
     })
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        {/* Test Engineer Name(s) */}
        <Form.Group widths='equal'>
          <Form.Select 
            fluid
            label='Test Engineer(s)'
            options={this.state.options}
            name='name'
            value={this.state.name} 
            onChange={this.handleChange}
            required
          />

          {/* Test Case Name */}
          <Form.Input
          fluid
            label='Test Case Name'
            className='form-control'
            type='text'
            name='caseName'
            value={this.state.caseName}
            onChange={this.handleChange}
            required
          />
        </Form.Group>

        

        {/* Entry */ }
        <Form.Field>
          <label>Entry</label>
          <textarea 
            className="form-control"
            name="entry"
            value={this.state.entry}
            onChange={this.onChange}
            required
          >
          </textarea>
        </Form.Field>

        {/* Test Artifact */}
        <Form.Field>
          <label>Test Artifact(s)</label>
          <select 
            className="form-control"
            name="artifact"
            value={this.state.artifact} 
            onChange={this.onChange}
          >
            <option value="">Select...</option>
            <option value="Zero Report">Zero Report</option>
            <option value="Summary Report">Summary Report</option>
            <option value="Results Report">Results Report</option>
            <option value="Write-in Report">Write-in Report</option>

            <option value="Audit Log">Audit Log</option>
          </select>
        </Form.Field>

        {/* Remove Entry */}
        <div className="col">
          <Button
            size='tiny'
            color='green'
            type="submit"
          >
            Add
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddEntry;
