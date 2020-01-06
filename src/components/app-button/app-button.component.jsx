import React from 'react'

import './app-button.styles.scss'

const AppButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} app-button`} {...otherProps}>
    {children}
  </button>
)

export default AppButton
