import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {removeItem} from '../../redux/cart/cart.actions'

// symbol characters in UTF-8 can be found here:  
// https://www.w3schools.com/charsets/ref_utf_dingbats.asp

const CheckoutItem = ({item, item: {name, price, quantity, imageUrl}, removeItem}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
