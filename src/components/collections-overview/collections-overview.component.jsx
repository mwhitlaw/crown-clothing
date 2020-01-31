import React from 'react'
import {StyledCollectionsOverview} from './collections-overview.styles'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
  <StyledCollectionsOverview>
    {
      collections.map(({id, ...collectionProps}) => 
        (<CollectionPreview key={id} {...collectionProps} />))
    }
  </StyledCollectionsOverview>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
