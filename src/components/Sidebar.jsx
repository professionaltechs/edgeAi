import React from 'react'

// STYLES
import '../styles/layout/sidebar.css'

// IMAGES
import logo from '../assets/logo.png'

const Sidebar = () => {
  return (
    <div className='sidebarMain'>
        <img src={logo} alt="" className='logo'/>
    </div>
  )
}

export default Sidebar