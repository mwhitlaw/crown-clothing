// note, we don't need to import React
// because we're not doing any JSX
// import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsIsFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'


const mapStateToProps = createStructuredSelector({
  // the 'isLoading' here needs to match the property that 
  // is expected by the WithSpinner HOC that is wrapping the CollectionOverview
  isLoading: selectCollectionsIsFetching
})

// instead of doing the following:
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
// we can use the compose function. compose composes from right to left:
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
