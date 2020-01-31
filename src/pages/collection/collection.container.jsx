import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsIsLoaded} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
  // because we need to negate the return of selectCollectionsIsLoaded
  // we would like to do this:
  // isLoading: !selectCollectionsIsLoaded
  // but we can't, because that is not invoking the function.
  // instead, we have to do this, which invokes the function and
  // negates its return value
  isLoading: (state) => !selectCollectionsIsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
