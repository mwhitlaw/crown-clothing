import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCc5doFr3H1Dv3dji_nbmBL_pzrAaDVZrQ",
  authDomain: "mw-crown-db.firebaseapp.com",
  databaseURL: "https://mw-crown-db.firebaseio.com",
  projectId: "mw-crown-db",
  storageBucket: "mw-crown-db.appspot.com",
  messagingSenderId: "706008301110",
  appId: "1:706008301110:web:a50136287e294b7139a297"
}

export const createUserProfile = async (userAuth, extraData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const authProvider = new firebase.auth.GoogleAuthProvider()
authProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(authProvider)

export default firebase
