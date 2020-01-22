import React from 'react'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {StyledCartIcon, StyledShoppingIcon, StyledItemCount} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden, cartQuantity}) => (
  <StyledCartIcon onClick={toggleCartHidden}>
    <StyledShoppingIcon className='shopping-icon' />
    <StyledItemCount>{cartQuantity}</StyledItemCount>
  </StyledCartIcon>
)

const mapStateToProps = createStructuredSelector({
  cartQuantity: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
