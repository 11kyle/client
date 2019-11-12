import React, { Component } from 'react';

import { Form, Button } from 'semantic-ui-react';

class Login extends Component {
	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Input 
						label='Email' 
						placeholder='Email'
						required
					/>
					<Form.Input 
						label='Password' 
						placeholder='Password' 
						type='password'
						required
					/>
				</Form.Group>
				<Button type='submit'>Login</Button>
			</Form>
		);
	}
}

export default Login;