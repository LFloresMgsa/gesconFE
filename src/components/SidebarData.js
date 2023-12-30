import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


export const SidebarData = [
  {
    title: 'Inicio',
    path: '/inicio',
    icon: <AiIcons.AiFillHome />,
    cName:'',
    className: 'MenuOption',
    iconClosed: '',
    iconOpened: '',
    role:' Root, Admin, User, All',
    tabOrder:1,
    subNav: []
  },
  
  {
    title: 'Categorias',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    cName:'',
    className: '',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    role:' Root, Admin, User, All',
    tabOrder:2,
    subNav: [
      {
        title: 'General',
        path: '/categoria1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
        className: '',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        role:' Root, Admin, User, All',
        tabOrder:3,
        subNav: []
      },
      {
        title: 'Sistemas',
        path: '/categoria2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
        className: '',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        role:' Root, Admin',
        tabOrder:4,
        subNav: []
      },
    ]
  },
  {
    title: 'Soporte',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: '',
    className: '',
    iconClosed: '',
    iconOpened: '',
    role:' Root, Admin, User, All',
    tabOrder:5,
    subNav: []
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LoginIcon/>,
    cName: '',
    className: '',
    iconClosed: '',
    iconOpened: '',
    role:' User, All',
    tabOrder:6,
    subNav: []
  }     , 
  {
    title: 'Logout',
    path: '/logout',
    icon: <LogoutIcon />,
    cName: '',
    className: '',
    iconClosed: '',
    iconOpened: '',
    role:' Root, Admin',
    tabOrder:7,
    subNav: []

  }      

];
