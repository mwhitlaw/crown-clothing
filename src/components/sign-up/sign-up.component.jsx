import React from 'react'
import FormInput from '../form-input/form-input.component'
import AppButton from '../app-button/app-button.component'
import {auth, createUserProfile} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, passwordConfirm} = this.state

    if (password !== passwordConfirm) {
      alert("Password doesn't match")
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfile(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: ''  
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {displayName, email, password, passwordConfirm} = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange} 
            label='Display Name' 
            type='text' 
            name='displayName' 
            value={displayName} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label='Email' 
            type='email' 
            name='email' 
            value={email} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label='Password' 
            type='password' 
            name='password' 
            value={password} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label='Confirm Password' 
            type='password' 
            name='passwordConfirm' 
            value={passwordConfirm} 
            required 
          />
          <AppButton type='submit'>Sign Up</AppButton>
        </form>
      </div>
    )
  }
}

export default SignUp
