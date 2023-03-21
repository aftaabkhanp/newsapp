import React from 'react'
import './Header.css'
import NavLinks from './NavLinks'
function Header(props) {
    
  return (
    <div className='Header'>
        <h2 className='logo'>NewsApp</h2>
       { props.showNavs && <NavLinks handleLogout={props.handleLogout}/>}
    </div>
  )
}

export default Header