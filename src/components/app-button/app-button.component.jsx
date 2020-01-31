import React from 'react'

import {AppButtonContainer} from './app-button.styles'

const AppButton = props => (
  <AppButtonContainer {...props}>
    {props.children}
  </AppButtonContainer>
)

export default AppButton
