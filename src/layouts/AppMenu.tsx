import React, { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { List } from '@material-ui/core'

import IconDashboard from '@material-ui/icons/DashboardOutlined'
import IconShoppingCart from '@material-ui/icons/ShoppingCartOutlined'
import IconPeople from '@material-ui/icons/PeopleOutlineRounded'
import IconBarChart from '@material-ui/icons/BarChartOutlined'
import IconLibraryBooks from '@material-ui/icons/LibraryBooksOutlined'

import AppMenuItem from '@/layouts/components/AppMenuItem'

const appMenuItems = [
  {
    name: 'Menu',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Catalog',
        Icon: IconShoppingCart,
        link: '/catalog',
      },
      {
        name: 'Level 2',
        Icon: IconPeople,
        items: [
          {
            name: 'Level 3',
            Icon: IconBarChart,
          },
          {
            name: 'Level 3',
            Icon: IconBarChart,
          },
        ],
      },
    ],
  },
  {
    name: 'SignIn',
    link: '/auth/signin',
    Icon: IconDashboard,
  },
]

const AppMenu: FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: theme.palette.common.white,
    },
  })
)

export default AppMenu
