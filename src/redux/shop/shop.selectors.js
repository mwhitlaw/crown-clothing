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

export const selectCollectionsIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectCollectionsFetchingErrorMessage = createSelector(
  [selectShop],
  shop => shop.errorMessage
)

export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)



