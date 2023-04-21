import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export default function NavHeader() {
  return (
    <div>
      <div className='nav-header'>
        <NavLink to='/'
          className={ ({isActive}) => isActive ? 'link-active' : undefined }
        >Home</NavLink>
        <NavLink to='/storylist'
          className={ ({isActive}) => isActive ? 'link-active' : undefined }
        >Story</NavLink>
      </div>
    </div>
  )
}
