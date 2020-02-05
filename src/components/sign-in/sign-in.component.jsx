import React from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import AppButton from '../app-button/app-button.component'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
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

    const {emailSignInStart} = this.props
    const {email, password} = this.state

    emailSignInStart(email, password)


    // try {
    //   await auth.signInWithEmailAndPassword(email, password)
    //   this.setState({
    //     email: '',
    //     password: ''
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

  handleChange = event => {
    const {value, name} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {googleSignInStart} = this.props
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
            <AppButton type='button' isGoogleSignIn onClick={googleSignInStart}>Sign in with Google</AppButton>
          </StyledButtons>
        </form>
      </StyledSignIn>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
