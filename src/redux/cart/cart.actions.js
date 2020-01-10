import {CartActionTypes} from './cart.types'

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const removeItemFully = item => ({
  type: CartActionTypes.REMOVE_ITEM_FULLY,
  payload: item
})

export const setItemQuantity = (item, quantity) => ({
  type: CartActionTypes.SET_ITEM_QUANTITY,
  payload: {
    item,
    quantity
  }
})
