import React from 'react'

import svgLogo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <img src={svgLogo} className="logo" alt="logo" />
      </div>
    </header>
  )
}

export default Header