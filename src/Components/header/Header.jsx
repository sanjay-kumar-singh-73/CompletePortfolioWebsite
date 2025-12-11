import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Sagar Mishra</div>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Portfolio</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
        <button>Hire Me</button>
      </nav>
    </header>
  )
}

export default Header
