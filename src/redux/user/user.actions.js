import UserActionTypes from './user.types'

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
})

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START
})

export const signInSuccess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
})

export const signInFailure = error => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGNOUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS
})

export const signOutFailure = error => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
})

export const signUpStart = signUpData => ({
  type: UserActionTypes.SIGNUP_START,
  payload: signUpData
})

export const signUpSuccess = ({userAuth, additionalData}) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: {userAuth, additionalData}
})

export const signUpFailure = error => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error
})

