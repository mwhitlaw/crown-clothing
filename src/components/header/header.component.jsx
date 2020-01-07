import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import './header.styles.scss'

const Header = ({currentUser, cartHidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        : 
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropdown />}
  </div>
)

// this is first, most simple, way of doing this:
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   cartHidden: state.cart.hidden
// })

// this is an alternate way, where wedestructure the state variable
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//   currentUser: currentUser,
//   cartHidden: hidden
// })

// this way uses the "reselect" memoized functions imported above:
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   cartHidden: selectCartHidden(state)
// })

// and this final way uses "reselect"'s "createStructuredselect" function to
// pass "state" to all the memoized functions:
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
