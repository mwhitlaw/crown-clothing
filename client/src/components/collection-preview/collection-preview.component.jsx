import React from 'react'
import {
  StyledCollectionPreview,
  StyledTitle,
  StyledPreview
} from './collection-preview.styles'
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'

const CollectionPreview = ({title, items, routeName, match, history}) => (
  <StyledCollectionPreview>
    <StyledTitle onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</StyledTitle>
    <StyledPreview className='preview'>
      {
        items
          .filter((item, index) => index < 4)
          .map(item => <CollectionItem key={item.id} item={item} />)
      }
    </StyledPreview>
  </StyledCollectionPreview>
)

export default withRouter(CollectionPreview)
