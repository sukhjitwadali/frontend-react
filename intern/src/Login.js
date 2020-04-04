import React from "react";
import {InputGroup } from "react-bootstrap";
import Button  from '@material-ui/core/Button';
import Checkbox  from '@material-ui/core/Checkbox';
import FormControlLabel  from '@material-ui/core/FormControlLabel';
import Form from 'react-bootstrap/Form';
import styles from './login.module.css';
import { Lock ,Envelope } from 'react-bootstrap-icons';
import axios from 'axios'

class Login extends React.Component {
  
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""
		}
	}
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e =>{
		e.preventDefault()
		console.log(this.state)
		axios.post('http://localhost:8000/api/users/login',this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error=>{
				console.log(error)
			})
	}
render(){
		const { email, password } = this.state
  return (
	  
		<Form onSubmit={this.submitHandler} className = {styles.topspace} >
	   <div className= {styles.logininputs}>
		<Form.Group controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<InputGroup>
			<InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend"><Envelope color= "#3f51b5" /></InputGroup.Text>
                </InputGroup.Prepend>
			<Form.Control type="email" name="email" value={email} onChange={this.changeHandler} placeholder="Enter email"aria-describedby="inputGroupPrepend"/>
			</InputGroup>
			<Form.Text className="text-muted">
			We'll never share your email with anyone else.
			</Form.Text>
		</Form.Group>
		<Form.Group controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<InputGroup>
			<InputGroup.Prepend>
			<InputGroup.Text>
			<Lock color="#3f51b5"/>
			</InputGroup.Text>
			</InputGroup.Prepend>
			<Form.Control type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} />
			</InputGroup>
		</Form.Group>
		<FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Check me out"
          labelPlacement="end"
        />
		<div className={styles.loginbutton}>
		
		<Button className = {styles.loginbtn} type="submit"  variant="contained" color="primary">
    		Login
    			</Button>
		</div>
		</div>
		</Form>
	   
		
  );
}
}

export default Login;