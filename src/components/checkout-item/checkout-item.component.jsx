import React from 'react'
import {connect} from 'react-redux'
import {addItem, removeItem, removeItemFully} from '../../redux/cart/cart.actions'
import {
  StyledCheckoutItem,
  StyledImage,
  StyledText,
  StyledQuantity,
  StyledRemoveButton
} from './checkout-item.styles'

// symbol characters in UTF-8 can be found here:  
// https://www.w3schools.com/charsets/ref_utf_dingbats.asp

const CheckoutItem = ({item, addItem, removeItem, removeItemFully}) => {
  const {name, price, quantity, imageUrl} = item
  return (
    <StyledCheckoutItem>
      <StyledImage>
        <img src={imageUrl} alt='cartItem'/>
      </StyledImage>
      <StyledText>{name}</StyledText>
      <StyledQuantity>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </StyledQuantity>
      <StyledText className='price'>${price}</StyledText>
      <StyledRemoveButton onClick={() => removeItemFully(item)}>&#10005;</StyledRemoveButton>
    </StyledCheckoutItem>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  removeItemFully: item => dispatch(removeItemFully(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
