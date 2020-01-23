import React from 'react'
import {StyledCollectionOverview} from './collection-overview.styles'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectShopCollections} from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
  <StyledCollectionOverview className='collections-overview'>
    {
      collections.map(({id, ...collectionProps}) => 
        (<CollectionPreview key={id} {...collectionProps} />))
    }
  </StyledCollectionOverview>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
