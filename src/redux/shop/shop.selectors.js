import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  shopCollections => shopCollections ? 
    Object.keys(shopCollections).map(key => shopCollections[key]) :
    []
)

export const selectShopCollection = collectionKey => createSelector(
  [selectShopCollections],
  shopCollections => shopCollections ? shopCollections[collectionKey] : null
)



