import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {addItem, removeItem, removeItemFully} from '../../redux/cart/cart.actions'

// symbol characters in UTF-8 can be found here:  
// https://www.w3schools.com/charsets/ref_utf_dingbats.asp

const CheckoutItem = ({item, addItem, removeItem, removeItemFully}) => {
  const {name, price, quantity, imageUrl} = item
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='cartItem'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => removeItemFully(item)}>&#10005;</div>
  </div>)
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  removeItemFully: item => dispatch(removeItemFully(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
