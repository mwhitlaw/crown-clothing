import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

// one way to share styles across things
// is to create on of these 'css' things
// which can then be used inside of styled 
// components as you see below in the
// commented out 'OptionLink' and 'OptionDiv'

// the 'OptionContainerStyles is commented out
// along with the 'OptionLink' and 'OptionDiv'
// because we're going to use a different way of 
// sharing styles, but we want to keep these 
// here so that we can see this way as well
// const OptionContainerStyles = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `
// export const OptionLink = styled(Link)`
//   ${OptionContainerStyles}
// `

// export const OptionDiv = styled.div`
//   ${OptionContainerStyles}
// `

// this replaces the way we did it in the 
// above 3 components, because the only difference 
// between OptionLink and OptionDiv was the base
// component, i.e. Link vs div. 
// now we can just use OptionLink in the, and where
// we need it to be a div, just do '<OptionLink as='div'>Blah</OptionLink>'
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
