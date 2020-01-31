import React from 'react'
import {withRouter} from 'react-router-dom'
import {
  StyledMenuItem,
  StyledBackgroundImage,
  StyledContent,
  StyledContentTitle,
  StyledContentSubtitle
} from './menu-item.styles'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) =>  (
  <StyledMenuItem className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <StyledBackgroundImage 
      className='background-image'
      imageUrl={imageUrl} 
    />
    <StyledContent>
      <StyledContentTitle>{title.toUpperCase()}</StyledContentTitle>
      <StyledContentSubtitle>Shop Now</StyledContentSubtitle>
    </StyledContent>
  </StyledMenuItem>
)

export default withRouter(MenuItem)
