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
  signOutFailure
} from './user.actions'


export function* getUserSnapFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfile, userAuth)
    const userSnap = yield userRef.get()
    yield put(signInSuccess({id: userSnap.id, ...userSnap.data()}))
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleAuthProvider)
    yield getUserSnapFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

// this function is setup in onEmailSignInStart below
// which uses the takeLatest effect and passes the 
// action object, with the type and payload, from the listened to action
export function* signInWithEmail({payload: {email, password}}) {
    try {
      const {user} = yield auth.signInWithEmailAndPassword(email, password)
      yield getUserSnapFromUserAuth(user)
    } catch (error) {
      yield put(signInFailure(error))
    }

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

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ])
}
