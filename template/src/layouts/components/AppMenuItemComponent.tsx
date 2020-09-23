import React, { forwardRef } from 'react'
import ListItem from '@material-ui/core/ListItem'
import { NavLink, NavLinkProps } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AppMenuItemComponentProps } from '@/compiler/types'

const AppMenuItemComponent: React.FC<AppMenuItemComponentProps> = (props) => {
  const { className, onClick, link, children } = props

  if (!link || typeof link !== 'string') {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    )
  }

  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props: NavLinkProps, ref: any) => (
        <NavLink exact {...props} innerRef={ref} />
      ))}
      to={link}
    />
  )
}

AppMenuItemComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.string,
  children: PropTypes.node,
}

export default AppMenuItemComponent
