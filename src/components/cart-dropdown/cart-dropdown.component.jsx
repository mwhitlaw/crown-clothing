import React from 'react'
import AppButton from '../app-button/app-button.component'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        :
        <span className='empty-message'>Your cart is empty</span>
      }
    </div>
    <AppButton onClick={() => {
      history.push('/checkout')

      // here we use the "dispatch" function to 
      // call the "toggleCartHidden" cart.action.
      // "dispatch" is passed by default to connect if we don't
      // define a "mapDispathToProps", so we can call the 
      // cart "toggleCartHidden()" action directly with the "dispatch" function
      dispatch(toggleCartHidden())
    }}>GO TO CHECKOUT</AppButton>
  </div>
 )

 const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems
 })

// if we DON'T define a mapDispatchToProps and pass it to connect,
// "dispatch" will be connected by default, making it available in the props
//  const mapDispatchToProps = dispatch => ({
//    toggleCartHidden: () => dispatch(toggleCartHidden())
//  })

 export default withRouter(connect(mapStateToProps)(CartDropdown))
