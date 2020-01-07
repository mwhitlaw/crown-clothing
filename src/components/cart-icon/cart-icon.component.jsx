import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, cartQuantity}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{cartQuantity}</span>
  </div>
)

const mapStateToProps = state => ({
  cartQuantity: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
