import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth, createUserProfile} from './firebase/firebase.utils'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selectors'

// this gets used in mapDispatchToProps
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {

  // this is assigned when calling auth.onAuthStateChanged
  // and invoked in componentWillUnMount
  unsubscribeFromAuth = null

  componentDidMount() {

    // get the setCurrentUser from the props, 
    // because it was mapped to props in mapDispatchToProps
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const {currentUser} = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
              currentUser ? 
              <Redirect to='/' /> : 
              <SignInAndSignUpPage />
            } 
          />
        </Switch>
      </div>
    )
  }
}

// for setting values through props
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// for getting values from props
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
