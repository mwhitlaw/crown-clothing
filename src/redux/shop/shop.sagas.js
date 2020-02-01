import {takeEvery, call, put} from 'redux-saga/effects'
import {ShopActionTypes} from './shop.types'
import {firestore, convertCollectionsSnapToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'

function* fetchCollectionsAsync() {
  yield console.log('At first yield in fetchCollectionsAsync')

  try {
    const collectionsRef = firestore.collection('collections')
    const collectionsSnap = yield collectionsRef.get()
    const collectionsMap = yield call(convertCollectionsSnapToMap, collectionsSnap)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
