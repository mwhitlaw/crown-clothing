import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import AppButton from '../app-button/app-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {
  StyledSignIn,
  StyledTitle,
  StyledButtons
} from './sign-in.styles'

const SignIn = ({emailSignInStart, googleSignInStart}) => {

  const [userData, setUserData] = useState({email: '', password: ''})

  const {email, password} = userData

  const handleSubmit = async event => {
    event.preventDefault()
    emailSignInStart(email, password)

  }

  const handleChange = event => {
    const {value, name} = event.target
    setUserData({...userData, [name]: value})
  }

  return (
    <StyledSignIn>
      <StyledTitle>I already have an account</StyledTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
          label='password'
          type='password' 
          name='password' 
          value={password} 
          required 
        />
        
        <StyledButtons>
          <AppButton type='submit'>Sign In</AppButton>
          <AppButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign in with Google</AppButton>
        </StyledButtons>
      </form>
    </StyledSignIn>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
