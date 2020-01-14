import React from 'react'
import './collection.styles.scss'

import {connect} from 'react-redux'
import {selectShopCollection} from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({match, collection}) => {
  const {title, items} = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => <CollectionItem key={item.id} item={item} />)}  
      </div>
    </div>
  )
}

// note how this one uses a selector that takes a parameter 
// and how the value for that parameter comes from "ownProps", which is the 
// the second parameter passed to the "mapStateToProps" function
// ... also note how the parameterized selector is curried and we pass the 
// "state" to the curried function returned by our selector that takes a parameter
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
