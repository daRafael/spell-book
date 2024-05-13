import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar ({ showSidebar }) {
  return (
    <div className={showSidebar ? "sidebar" : " sidebar hide-sidebar"}>
      <Link to='/' className='sidebar-links'>
        <div className='sidebar-pages'>
          HOME
        </div>
      </Link>
      <Link to='/spell-list' className='sidebar-links'>
        <div className='sidebar-pages'>
          ALL SPELLS
        </div>
      </Link> 
      <Link to='/add-spellbook' className='sidebar-links'>
        <div className='sidebar-pages'>
          CREATE YOUR SPELLBOOK
        </div>
      </Link>
      <Link to='/spellbook-list' className='sidebar-links'>
        <div className='sidebar-pages'>
          YOUR SPELLBOOKS
        </div>
      </Link>
    </div>
  )
}