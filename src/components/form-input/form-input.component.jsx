import React from 'react'

import {
  StyledGroup,
  StyledFormInput,
  StyledFormInputLabel
} from './form-input.styles'

const FormInput = ({handleChange, label, ...otherProps}) => (
  <StyledGroup>
    <StyledFormInput 
      onChange={handleChange}
      {...otherProps}
    />
    {
      label ? (
        <StyledFormInputLabel 
          className={`${otherProps.value.length ? 'shrink' : ''} `}>
          {label}
        </StyledFormInputLabel>
      )
      : null
    }
  </StyledGroup>  
)

export default FormInput
