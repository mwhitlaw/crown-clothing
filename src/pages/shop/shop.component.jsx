import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions'
import {selectCollectionsIsLoaded} from '../../redux/shop/shop.selectors'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

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
    const {match, collectionsIsLoaded} = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!collectionsIsLoaded} {...props} />} />
      </div>
    )
  }
}


const mapStateToProps = createStructuredSelector({
  collectionsIsLoaded: selectCollectionsIsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
