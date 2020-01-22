import React from 'react'
import {
  StyledCartItem, 
  StyledItemDetails, 
  StyledImg,
  StyledName,
  StyledPrice
} from './cart-item.styles'


const CartItem = ({item: {name, price, quantity, imageUrl}}) => {
  return (
    <StyledCartItem>
      <StyledImg src={imageUrl} alt='Item'/>
      <StyledItemDetails>
        <StyledName>{name}</StyledName>
        <StyledPrice>{quantity} x ${price}</StyledPrice>
      </StyledItemDetails>
    </StyledCartItem>
  )
}

export default CartItem
