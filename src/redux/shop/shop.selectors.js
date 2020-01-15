import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectShopCollection = routeName => createSelector(
  [selectShopCollections],
  shopCollections => shopCollections.find(collection => collection.routeName.toLowerCase() === routeName.toLowerCase())
)



