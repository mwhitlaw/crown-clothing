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
  const userSnap = await userRef.get()

  if (!userSnap.exists) {
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

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

// example of adding a collection to firebase.firestore, then adding
// documents to that collection
export const addCollectionAndDocuments = async (collectionKey, docsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  docsToAdd.forEach(doc => {
    // this creates a new doc with a generated, random id
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, doc)
  })

  return await batch.commit()
}

export const convertCollectionsSnapToMap = (collectionsSnap) => {
  return convertCollectionsSnapToArray(collectionsSnap).reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const convertCollectionsSnapToArray = (collectionsSnap) => {
  const ret = collectionsSnap.docs.map(doc => {
    const {title, items} = doc.data()

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items
    }
  })
  return ret
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export default firebase
