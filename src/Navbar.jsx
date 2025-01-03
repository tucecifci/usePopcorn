import React from 'react'
import { useState } from 'react'
import Search from './Search';
import Logo from './Logo';
import NumResults from './NumResults';


function Navbar({children}) {

  return (
    <nav className="nav-bar">
       {children}
      </nav>
  )
}

export default Navbar
