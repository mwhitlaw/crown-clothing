import React, { useCallback } from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateCollections} from '../../redux/shop/shope.actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import {firestore, convertCollectionsSnapToMap} from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

  state = {
    loading: true
  }

  unsubscribeFromCollectionsSnap = null

  componentDidMount() {
    const {updateCollections} = this.props
    const collectionsRef = firestore.collection('collections')

    // this is getting the data using the promise patter
    collectionsRef.get().then(collectionsSnap => {
      const collections = convertCollectionsSnapToMap(collectionsSnap)
      updateCollections(collections)
      this.setState({loading: false})
    })

    // this is getting the data using the Observer Pattern
    // this.unsubscribeFromCollectionsSnap = collectionsRef.onSnapshot(async collectionsSnap => {
    //   const collections = convertCollectionsSnapToMap(collectionsSnap)
    //   updateCollections(collections)
    //   this.setState({loading: false})
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromCollectionsSnap()
  }

  render() {
    const {match} = this.props
    const {loading} = this.state
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage)
