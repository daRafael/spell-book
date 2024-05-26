import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar ({ showSidebar }) {
  return (
    <div className={showSidebar ? "sidebar" : " sidebar hide-sidebar"}>
      <Link to='/' className='sidebar-links'>
        <div className='sidebar-pages'>
          Home
        </div>
      </Link>
      <Link to='/spell-list' className='sidebar-links'>
        <div className='sidebar-pages'>
          All Spells
        </div>
      </Link> 
      <Link to='/add-spellbook' className='sidebar-links'>
        <div className='sidebar-pages'>
          Create Your Spellbook
        </div>
      </Link>
      <Link to='/spellbook-list' className='sidebar-links'>
        <div className='sidebar-pages'>
          Your Spellbooks
        </div>
      </Link>
    </div>
  )
}