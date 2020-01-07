import React from 'react'
import AppButton from '../app-button/app-button.component'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'

 const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      }
    </div>
    <AppButton>GO TO CHECKOUT</AppButton>
  </div>
 )

 const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems
 })

 export default connect(mapStateToProps)(CartDropdown)
