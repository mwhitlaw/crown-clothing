import React from 'react'
import './checkout-item.styles.scss'
import {connect} from 'react-redux'
import {removeItem, setItemQuantity} from '../../redux/cart/cart.actions'

// symbol characters in UTF-8 can be found here:  
// https://www.w3schools.com/charsets/ref_utf_dingbats.asp

const CheckoutItem = ({item, removeItem, incOrDecItemQuantity}) => {
  const {name, price, quantity, imageUrl} = item
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='cartItem'/>
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
      <div className='arrow' onClick={() => incOrDecItemQuantity(item, false)}>&#10094;</div>
      <span className='value'>{quantity}</span>
      <div className='arrow' onClick={() => incOrDecItemQuantity(item, true)}>&#10095;</div>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => removeItem(item)}>&#10005;</div>
  </div>)
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  incOrDecItemQuantity: (item, isInc) => {
    console.log(item)
    const newQuantity = isInc ? item.quantity + 1 : item.quantity - 1 
    return newQuantity > 0 ? 
      dispatch(setItemQuantity(item, newQuantity)) :
      dispatch(removeItem(item))
  }
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
