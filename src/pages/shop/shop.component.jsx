import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'


class ShopPage extends React.Component {

  // state = {
  //   loading: true
  // }

  // unsubscribeFromCollectionsSnap = null

  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props
    fetchCollectionsStartAsync()
    // const {updateCollections} = this.props
    // const collectionsRef = firestore.collection('collections')

    // // this is getting the data using the promise patter
    // collectionsRef.get().then(collectionsSnap => {
    //   const collections = convertCollectionsSnapToMap(collectionsSnap)
    //   updateCollections(collections)
    //   this.setState({loading: false})
    // })

    // this is getting the data using the Observer Pattern
    // this.unsubscribeFromCollectionsSnap = collectionsRef.onSnapshot(async collectionsSnap => {
    //   const collections = convertCollectionsSnapToMap(collectionsSnap)
    //   updateCollections(collections)
    //   this.setState({loading: false})
    // })
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromCollectionsSnap()
  // }

  render() {
    const {match} = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)
