import styled from 'styled-components'

export const StyledCheckoutItem = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const StyledImage = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const StyledText = styled.span`
 width: 23%;
`

export const StyledQuantity = styled(StyledText)`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`

export const StyledRemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
