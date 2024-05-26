import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar ({ showSidebar, setShowSidebar}) {
  return (
    <div className='navbar'>
      <div className='spellbook-logo-container'>
        <Link to='/'>
          <img
            className='spellbook-logo'
            src='/img/spellbook-logo-white.png'
          />
        </Link>
      </div>
      <div className='hamburger-menu-container'>
        <img
          onClick={() => {setShowSidebar(!showSidebar)}}
          className='ham-menu-icon' 
          src="/img/ham-menu-icon.png" 
          alt="ham-menu" 
        />
      </div>
    </div>
  )
}