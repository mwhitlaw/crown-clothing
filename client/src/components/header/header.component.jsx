import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signOutStart} from '../../redux/user/user.actions'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles'

const Header = ({currentUser, cartHidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {
        currentUser ?
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
        : 
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {cartHidden ? null : <CartDropdown />}
  </HeaderContainer>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
