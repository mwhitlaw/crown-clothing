import {CartActionTypes} from './cart.types'
import {addItem, removeItem, removeItemFully, setItemQuantity} from './cart.utils'

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
        cartItems: addItem(state.cartItems, action.payload)
      }
      case CartActionTypes.REMOVE_ITEM: 
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM_FULLY: 
      return {
        ...state,
        cartItems: removeItemFully(state.cartItems, action.payload)
      }
    case CartActionTypes.SET_ITEM_QUANTITY: 
      const {item, quantity} = action.payload
      return {
        ...state,
        cartItems: setItemQuantity(state.cartItems, item, quantity)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default: 
      return state
  }
}

export default cartReducer
