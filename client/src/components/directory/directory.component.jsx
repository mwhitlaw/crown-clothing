import React from 'react'
import {StyledDirectoryMenu} from './directory.styles'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'

const Directory = ({sections}) => (
  <StyledDirectoryMenu>
    {
      sections.map(({id, ...sectionProps}) => (
          <MenuItem key={id} {...sectionProps} />
        )
      )
    }
  </StyledDirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
