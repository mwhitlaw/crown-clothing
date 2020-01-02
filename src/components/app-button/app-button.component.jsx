import React from 'react'

import './app-button.styles.scss'

const AppButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} app-button`} {...otherProps}>
    {children}
  </button>
)

export default AppButton
