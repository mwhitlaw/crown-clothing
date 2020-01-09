import {CartActionTypes} from './cart.types'
import {mergeItem} from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM: 
      return {
        ...state,
        cartItems: mergeItem(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM: 
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartActionTypes.SET_ITEM_QUANTITY: 
      return {
        ...state,
        cartItems: state.cartItems.map(i => i.id === action.payload.item.id ? {...i, quantity: action.payload.quantity} : i) 
      }
    default: 
      return state
  }
}

export default cartReducer
