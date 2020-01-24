import styled from 'styled-components'
import AppButton from '../app-button/app-button.component'

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
  }

  button {
    display: flex;
    opacity: 0.85;
  }
`

export const StyledAddButton = styled(AppButton)`
  display: none;
  position: absolute;
  top: 255px;
  width: 80%;
  opacity: 0.7;
`

export const StyledBackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image:  ${({imageUrl}) => `url(${imageUrl})`};
`

export const StyledCollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const StyledName = styled.span`
  width: 90%;
  margin-top: 15px;
`

export const StyledPrice = styled.span`
  width: 10%;
`
