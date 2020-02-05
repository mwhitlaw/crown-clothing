import {takeLatest, put, all, call} from 'redux-saga/effects'

import UserActionTypes from './user.types'

import {
  auth, 
  googleAuthProvider, 
  createUserProfile,
  getCurrentUser
} from '../../firebase/firebase.utils'

import {
  signInSuccess, 
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions'


export function* getUserSnapFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfile, userAuth, additionalData)
    const userSnap = yield userRef.get()
    yield put(signInSuccess({id: userSnap.id, ...userSnap.data()}))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signUp({payload: {email, password, displayName}}) {
  try {
    // not the call to auth.createUserWithEmailAndPassword returns an
    // object with the property 'user', but I want to be called 'userAuth'
    // so this assignment, {user: userAuth}, effectively renames 
    // the returned 'user' to 'userAuth'
    const {user: userAuth} = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({userAuth, additionalData: {displayName}}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const {user: userAuth} = yield auth.signInWithPopup(googleAuthProvider)
    yield getUserSnapFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

// this function is setup in onEmailSignInStart below
// which uses the takeLatest effect and passes the 
// action object, with the type and payload, from the listened to action
export function* signInWithEmail({payload: {email, password}}) {
    try {
      const {user: userAuth} = yield auth.signInWithEmailAndPassword(email, password)
      yield getUserSnapFromUserAuth(userAuth)
    } catch (error) {
      yield put(signInFailure(error))
    }
}

export function* signInAfterSignUp({payload: {userAuth, additionalData}}) {
  yield getUserSnapFromUserAuth(userAuth, additionalData)
}


export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getUserSnapFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}


export function* onEmailSignInStart() {
  // this second param, which is a function*, gets passed the action
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signInWithEmail)
}


export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}
