import './Navbar.css'

export default function Navbar ({ showSidebar, setShowSidebar}) {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <img
          onClick={() => {setShowSidebar(!showSidebar)}}
          className='ham-menu-icon' 
          src="/public/img/ham-menu-icon.png" 
          alt="ham-menu" 
        />
      </div>
    </div>
  )
}