import React from 'react';

Class LoginForm extends React.Component {
	state = {
		data{
			email:'',
			password:''
		},
		loading:false,
		errors:{}
	};

	render() {
		return( 
			<div>
				<Form.field>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" placeholder="email@example.com" value={this.state.data.email} onChange={this.onChange}/>
				</Form.field>
				<Button primary>Login</Button>
			</div>

			)
	}	
}