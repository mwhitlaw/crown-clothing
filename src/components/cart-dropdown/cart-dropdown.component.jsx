import React from 'react'
import AppButton from '../app-button/app-button.component'
import './cart-dropdown.styles.scss'

 const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <AppButton>GO TO CHECKOUT</AppButton>
  </div>
 )

 export default CartDropdown
