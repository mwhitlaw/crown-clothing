import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import AppButton from '../app-button/app-button.component'
import {signUpStart} from '../../redux/user/user.actions'


import {
  StyledSignUp,
  StyledTitle
} from './sign-up.styles'

const SignUp = ({signUpStart}) => {

  const [userData, setUserData] = useState({displayName: '', email: '', password: '', passwordConfirm: ''})
  const {displayName, email, password, passwordConfirm} = userData


  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== passwordConfirm) {
      alert("Password doesn't match")
      return
    }

    signUpStart(email, password, displayName)

  }

  const handleChange = event => {
    const {value, name} = event.target
    setUserData({...userData, [name]: value})
  }

  return (
    <StyledSignUp>
      <StyledTitle>I do not have an account</StyledTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          handleChange={handleChange} 
          label='Display Name' 
          type='text' 
          name='displayName' 
          value={displayName} 
          required 
        />
        <FormInput 
          handleChange={handleChange} 
          label='Email' 
          type='email' 
          name='email' 
          value={email} 
          required 
        />
        <FormInput 
          handleChange={handleChange} 
          label='Password' 
          type='password' 
          name='password' 
          value={password} 
          required 
        />
        <FormInput 
          handleChange={handleChange} 
          label='Confirm Password' 
          type='password' 
          name='passwordConfirm' 
          value={passwordConfirm} 
          required 
        />
        <AppButton type='submit'>Sign Up</AppButton>
      </form>
    </StyledSignUp>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName})) 
})

export default connect(null, mapDispatchToProps)(SignUp)
