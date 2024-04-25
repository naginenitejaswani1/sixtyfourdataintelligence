import React, {useState} from 'react'

import {MdDashboardCustomize} from 'react-icons/md'
import {RxQuestionMarkCircled} from 'react-icons/rx'
import {IoMdCalendar, IoMdSettings, IoMdBusiness} from 'react-icons/io'

import {HiMiniCurrencyDollar} from 'react-icons/hi2'

import {FaBars} from 'react-icons/fa'

import {NavLink} from 'react-router-dom'

import './index.css'

const Sidebar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const menuItem = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <MdDashboardCustomize />,
    },
    {
      path: '/business',
      name: 'Business',
      icon: <IoMdBusiness />,
    },
    {
      path: '/calender',
      name: 'Calender',
      icon: <IoMdCalendar />,
    },
    {
      path: '/currency',
      name: 'Currency',
      icon: <HiMiniCurrencyDollar />,
    },
    {
      path: '/question',
      name: 'FA Question',
      icon: <RxQuestionMarkCircled />,
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: <IoMdSettings />,
    },
  ]
  return (
    <div className="container">
      <div style={{width: isOpen ? '200px' : '100px'}} className="sidebar">
        <div className="top_section">
          <h1 style={{display: isOpen ? 'block' : 'none'}}>
            <img
              src="https://res.cloudinary.com/dif7fb7el/image/upload/v1714022531/6_tnlsbd.png"
              alt="logo"
              className="logo"
            />
          </h1>
          <div style={{marginLeft: isOpen ? '60px' : '0px'}} className="bars">
            <FaBars
              className="d-flex flex-row justify-content-end"
              onClick={toggle}
            />
          </div>
        </div>
        {menuItem.map(item => (
          <NavLink to={item.path} className="link" activeclassName="active">
            <div className="icon">{item.icon}</div>
            <div
              style={{display: isOpen ? 'block' : 'none'}}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
