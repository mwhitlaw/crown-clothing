import React from 'react'
import {
  StyledCollectionItem,
  StyledBackgroundImage,
  StyledAddButton,
  StyledCollectionItemFooter,
  StyledName,
  StyledPrice
} from './collection-item.styles'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions'


const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl} = item
  return (
    <StyledCollectionItem>
      <StyledBackgroundImage className='image' imageUrl={imageUrl}/>
      <StyledCollectionItemFooter>
        <StyledName>{name}</StyledName>
        <StyledPrice>${price}</StyledPrice>
      </StyledCollectionItemFooter>
      <StyledAddButton onClick={() => addItem(item)} inverted>Add to Cart</StyledAddButton>
    </StyledCollectionItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
