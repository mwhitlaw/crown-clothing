import {createSelector} from 'reselect'

// an input selector:
const selectCart = state => state.cart

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems ? cartItems.reduce((a, c) => a + c.quantity, 0) : 0
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems ? cartItems.reduce((a, c) => a + c.price * c.quantity, 0) : 0
)
