import React from 'react'
import FormInput from '../form-input/form-input.component'
import AppButton from '../app-button/app-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import {
  StyledSignIn,
  StyledTitle,
  StyledButtons
} from './sign-in.styles'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
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
    return (
      <StyledSignIn>
        <StyledTitle>I already have an account</StyledTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange} 
            label='Email' 
            type='email' 
            name='email' 
            value={this.state.email} 
            required 
          />
          
          <FormInput 
            handleChange={this.handleChange}
            label='password'
            type='password' 
            name='password' 
            value={this.state.password} 
            required 
          />
          
          <StyledButtons>
            <AppButton type='submit'>Sign In</AppButton>
            <AppButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</AppButton>
          </StyledButtons>
        </form>
      </StyledSignIn>
    )
  }
}

export default SignIn
